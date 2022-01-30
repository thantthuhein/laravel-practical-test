import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { isLoggedIn, saveUserData } from './Auth';

const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const onEmailChange = event => {
          setEmail(event.target.value);
     }

     const onPasswordChange = event => {
          setPassword(event.target.value);
     }

     const onSubmitForm = event => {
          event.preventDefault();

          axios.post('/api/V1/login', {
               'email': email,
               'password': password
          }).then((result) => {
               saveUserData(result.data);
               window.location = '/fields-to-render';
          })
          .catch((error) => {
               alert(error.response?.data?.message)
          })

     }

     return (
          <div>
               {
                    isLoggedIn ?
                    <h1>Already Logged In</h1>
                    :
                    <div className="flex items-center justify-center h-screen">
                         <div className="bg-red-400 rounded-lg border shadow-lg px-16 py-10">
                              <div className="text-xl font-bold mb-6">
                                   <h1 className="text-xl">Login</h1>
                              </div>

                              <form onSubmit={onSubmitForm}>
                                   <div className="mb-6">
                                        <label className="block text-grey-darker text-sm mb-2" htmlFor="email">
                                             Email
                                        </label>
                                        <input onChange={onEmailChange} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email" />
                                   </div>
                                   <div className="mb-6">
                                        <label className="block text-grey-darker text-sm mb-2" htmlFor="password">
                                             Password
                                        </label>
                                        <input onChange={onPasswordChange} value={password} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" />
                                   </div>

                                   <button type="submit" className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" type="submit">
                                   Sign In
                                   </button>
                              </form>
                         </div>
                    </div>
               }
          </div>
     );
}

export default Login;

if (document.getElementById('login')) {
     ReactDOM.render(<Login />, document.getElementById('login'));
}