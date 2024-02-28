// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Registration.css';
// import { useMutation } from 'react-query';
// import { useNavigate } from "react-router-dom";
//
// function Registration() {
//     const navigate = useNavigate();
//     const saveData = useMutation({
//         mutationFn: (requestData: any) => {
//             return axios.post('http://localhost:8088/users/register', {data: requestData});
//         },
//         mutationKey: 'SAVED',
//         onError: (error) => {
//             console.error('Error registering user:', error.message || error.response?.data);
//             toast.error(`Error registering user: ${(error.message || error.response?.data)}`);
//         },
//         onSuccess: (data) => {
//             console.log('User registered successfully:', data);
//             toast.success('User registered successfully');
//             navigate('/sign-in');
//
//
//         },
//     });
//
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [userName, username] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//
//     const handleRegister = () => {
//         // Basic password validation
//         if (password !== confirmPassword) {
//             toast.error('Password and confirm password do not match');
//             return;
//         }
//
//         // Use the mutate function from useMutation to initiate the mutation
//         saveData.mutate({
//             firstName,
//             lastName,
//             userName,
//             email,
//             phoneNumber,
//             password,
//         });
//     };
//
//     return (
//         <div className='maindiv'>
//             <h1 className='header1registration'> Welcome To Seven Steps</h1>
//             <h2 className='headerregistration'> --- Your Details --- </h2>
//             <form className='registrationform' onSubmit={(e) => {
//                 e.preventDefault(); // Prevents the default form submission behavior
//                 handleRegister();    // Calls your registration function
//             }}>
//                 <input
//                     className='registrationinput'
//                     type="text"
//                     placeholder='First Name'
//                     required
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <br/>
//
//                 <input
//                     className='registrationinput'
//                     placeholder='Last Name'
//                     required
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <br/>
//
//                 <input
//                     className='registrationinput'
//                     placeholder='Username'
//                     required
//                     type="text"
//                     value={userName}
//                     onChange={(e) => username(e.target.value)}
//                 />
//                 <br/>
//                 <input
//                     className='registrationinput'
//                     type="email"
//                     placeholder='Email'
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <br/>
//                 <input
//                     className='registrationinput'
//                     type="tel"
//                     placeholder='Phone Number'
//                     required
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//                 <br/>
//
//                 <input
//                     className='registrationinput'
//                     type="password"
//                     placeholder='Password'
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br/>
//
//                 <input
//                     className='registrationinput'
//                     type="password"
//                     placeholder='Confirm Password'
//                     required
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <br/>
//                 <button className='buttons' type="submit" onClick={handleRegister}>
//                     Register
//                 </button>
//
//             </form>
//             <br/>
//             <label className='registrationlabel'>Already have an account?
//                 <br/>
//                 <a href='/sign-in' className='ancher'> Sign-In </a> </label>
//             <br/>
//             <a href='#' className='ancher2'> Forget Password</a>
//
//         </div>
//
//     );
// }
//
// export default Registration
