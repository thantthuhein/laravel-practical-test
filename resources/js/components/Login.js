import React from 'react';
import ReactDOM from 'react-dom';

function Login() {
     return (
          <div>
               <h1>Login Page</h1>
          </div>
     );
}

export default Login;

if (document.getElementById('login')) {
     ReactDOM.render(<Login />, document.getElementById('login'));
}