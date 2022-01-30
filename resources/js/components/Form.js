import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {

     useEffect(() => {
          let token = window.localStorage.getItem('token')

          if (!token) {
               window.location = '/login';
          }

          let user = JSON.parse(window.localStorage.getItem('user'));

          axios.get(`api/V1/users/${user.id}/latest-form`)
          .then(response => {
               console.log(response.data)
               setShowName(!!response.data.name);
               setShowPhone(!!response.data.phone);
               setShowDateOfBirth(!!response.data.date_of_birth);
               setShowGender(!!response.data.gender);
          })
     })

     const [showName, setShowName] = useState(true);
     const [showPhone, setShowPhone] = useState(true);
     const [showDateOfBirth, setShowDateOfBirth] = useState(true);
     const [showGender, setShowGender] = useState(true);
     const [name, setName] = useState('');
     const [phone, setPhone] = useState('');
     const [dateOfBirth, setDateOfBirth] = useState('');
     const [male, setMale] = useState(false);
     const [female, setFemale] = useState(false);
     const [loading, setLoading] = useState(false);

     const onNameChange = (event) => {
          setName(event.target.value)
     }

     const onPhoneChange = (event) => {
          setPhone(event.target.value)
     }

     const onDateOfBirthChange = (event) => {
          setDateOfBirth(event.target.value)
     }

     const onMaleGenderChange = () => {
          setMale(true);
          setFemale(false);
     }

     const onFemaleGenderChange = () => {
          setFemale(true);
          setMale(false);
     }

     const onSubmitForm = (event) => {
          event.preventDefault();
          setLoading(true);

          let user = JSON.parse(window.localStorage.getItem('user'));
          let token = window.localStorage.getItem('token');
          const config = {
              headers: { Authorization: `Bearer ${token}` }
          };

          axios.post('/api/V1/submit-form', {
               'user_id': user.id,
               'name': name,
               'phone': phone,
               'date_of_birth': dateOfBirth,
               'gender': male ? 'male' : 'female',
          }, config)
          .then(response => {
               window.location = '/fields-to-render'
          })
          .catch((error) => {
               console.log(error.response?.data)
          });
     }


     return (
          <div>
               <div className="bg-red-400 rounded-lg border shadow-lg px-16 py-10 mt-4 mx-10">
                    <div className="text-xl font-bold mb-6">
                         <h1 className="text-xl">Form Submission</h1>
                    </div>

                    <form onSubmit={onSubmitForm}>
                         {
                              showName &&
                              <div className="mb-6">
                                   <label className="block text-grey-darker text-sm mb-2" htmlFor="name">
                                        Name
                                   </label>
                                   <input required value={name} onChange={onNameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="Name" />
                              </div>
                         }

                         {
                              showPhone &&
                              <div className="mb-6">
                                   <label className="block text-grey-darker text-sm mb-2" htmlFor="phone">
                                        Phone
                                   </label>
                                   <input required value={phone} onChange={onPhoneChange} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="phone" type="text" placeholder="09-" />
                              </div>
                         }

                         {
                              showDateOfBirth &&
                              <div className="mb-6">
                                   <label className="block text-grey-darker text-sm mb-2" htmlFor="dateOfBirth">
                                        Date Of Birth
                                   </label>
                                   <input required value={dateOfBirth} onChange={onDateOfBirthChange} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="dateOfBirth" type="date" />
                              </div>
                         }

                         {
                              showGender &&
                              <div className="mb-6">
                                   <label className="block text-grey-darker text-sm mb-2" htmlFor="gender">
                                        Gender
                                   </label>
                                   <label className="inline-flex items-center">
                                        <input value={male} onChange={onMaleGenderChange} checked={male} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Male</span>
                                   </label>
                                   <label className="inline-flex items-center ml-6">
                                        <input value={female} onChange={onFemaleGenderChange} checked={female} type="checkbox" className="form-checkbox h-5 w-5 text-blue-100" /><span className="ml-2">Female</span>
                                   </label>
                              </div>
                         }

                         <button type="submit" className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" type="submit">
                              {
                                   loading ? <p>Submitting...</p> : <p>Submit</p>
                              }
                         </button>
                    </form>
               </div>
          </div>
     );
}

export default Form;

if (document.getElementById('form')) {
     ReactDOM.render(<Form />, document.getElementById('form'));
}