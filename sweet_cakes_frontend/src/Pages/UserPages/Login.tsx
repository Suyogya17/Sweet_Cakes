import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
    interface FormData {
        email: string;
        password: string;
    }
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/authenticate",

            );
            if (response.status === 200) {
                toast.done("Login success");
                navigate("/dashboard");
            }
        } catch (error) {
            toast.error("Login Failed");
        }
    };

    return (
        <>
            <div className='loginpage'>
                <h2 className='loginheader'>--- Welcome ---</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input
                        className='logininput'
                        placeholder='Email'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <input
                        className='logininput'
                        placeholder='Password'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <button className='buttons' type="submit">Login</button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>

                <label className='loginlabel'>Don`t have an account?
                    <a href='/' className='ancher'> Sign-Up </a> </label>
                <br/>
                <a href='#' className='ancher2'> Forget Password</a>

            </div>
        </>
    );
}

export default Login
