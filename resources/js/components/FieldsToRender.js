import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FieldsToRender = () => {
     const [name, setName] = useState(false);
     const [phone, setPhone] = useState(false);
     const [dateOfBirth, setDateOfBirth] = useState(false);
     const [gender, setGender] = useState(false);

     const onNameChange = () => {
          setName(!name);
     }

     const onPhoneChange = () => {
          setPhone(!phone);
     }

     const onDateOfBirthChange = () => {
          setDateOfBirth(!dateOfBirth);
     }

     const onGenderChange = () => {
          setGender(!gender);
     }

     const onFormSubmit = (event) => {
          event.preventDefault();
          let user = JSON.parse(window.localStorage.getItem('user'));
          let token = window.localStorage.getItem('token');
          const config = {
              headers: { Authorization: `Bearer ${token}` }
          };
          // console.log(user.id)
          axios.post('/api/V1/save-form', {
               'user_id': user.id,
               'name': name,
               'phone': phone,
               'date_of_birth': dateOfBirth,
               'gender': gender,
          }, config)
          .then(response => {
               console.log(response.data)
               window.location = '/submit-form';
          })
          .catch((error) => {
               alert(error.response?.data?.message)
          });
     }


     return (
          <div>
               <div className="bg-red-400 rounded-lg border shadow-lg px-16 py-10 mt-4 mx-10">
                    <div className="text-xl font-bold mb-6">
                         <h1 className="text-xl">Form</h1>

                         <p className='text-sm'>
                              There are many variations of passages of Lorem Ipsum avaliable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believeable.
                         </p>
                    </div>

                    <form onSubmit={onFormSubmit}>
                         <div className="mb-6">
                              <label className="inline-flex items-center mt-3">
                                   <input value={name} onChange={onNameChange} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Name</span>
                              </label>

                              <label className="inline-flex items-center mt-3 ml-12">
                                   <input value={phone} onChange={onPhoneChange} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Phone</span>
                              </label>

                              <label className="inline-flex items-center mt-3 ml-12">
                                   <input value={dateOfBirth} onChange={onDateOfBirthChange} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Date of Birth</span>
                              </label>

                              <label className="inline-flex items-center mt-3 ml-12">
                                   <input value={gender} onChange={onGenderChange} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Gender</span>
                              </label>
                         </div>


                         <button type="submit" className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" type="submit">
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     );
}

export default FieldsToRender;

if (document.getElementById('fields-to-render')) {
     ReactDOM.render(<FieldsToRender />, document.getElementById('fields-to-render'));
}