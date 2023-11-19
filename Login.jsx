import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4020/auth/adminlogin', values);
            console.log(response.data); // Assuming the server responds with some data upon successful login
            // Add logic here to handle successful login, such as setting tokens, redirecting, etc.
        } catch (error) {
            console.error("Error:", error);
            // Add logic here to handle login errors, such as displaying error messages to the user
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2><center>Login Page</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            type="email"
                            name='email'
                            autoComplete='off'
                            placeholder='Enter Email'
                            value={values.email}
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            value={values.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                    <div className='mb-3'>
                        <input type="checkbox" name="tick" id="tick" />
                        <label htmlFor="password"><strong>You agree with Terms and Conditions</strong></label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;