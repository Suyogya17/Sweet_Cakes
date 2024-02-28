// import  { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Login.css';
//
// function Login() {
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });
//
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setLoginData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//
//     const handleLogin = async (e) => {
//         e.preventDefault();
//
//         try {
//             const response = await axios.post(
//                 'http://localhost:8088/login', // Replace with your login endpoint
//                 loginData
//             );
//
//             if (response.status === 200) {
//                 toast.success('Login successful');
//                 // Redirect or perform additional actions on successful login
//             }
//         } catch (error) {
//             toast.error('Login failed');
//             // Handle login failure, show error message, etc.
//         }
//     };
//
//     return (
//         <div className='loginpage'>
//
//             <form
//                 className='loginForm'
//                 onSubmit={handleLogin}>
//
//                 <h2 className='loginheader'>--- Welcome ---</h2>
//
//                 <input
//                     className='logininput'
//                     type="text"
//                     name="username"
//                     placeholder='Username'
//                     value={loginData.username}
//                     onChange={handleInputChange}
//                 />
//
//                 <br/>
//
//                 <input
//                     className='logininput'
//                     placeholder='Password'
//                     type="password"
//                     name="password"
//                     value={loginData.password}
//                     onChange={handleInputChange}
//                 />
//
//                 <br/>
//                 <button className='buttons' type="submit">Log-In</button>
//             </form>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//
//             <label className='loginlabel'>Don`t have an account? <a className='ancher' href='/'>
//                 Register
//             </a></label>
//         </div>
//     );
// }
//
// export default Login;
