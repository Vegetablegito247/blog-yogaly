import React, { useState } from 'react';
import './logAdmin.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/adminStore';

function LogAdmin() {
    const dispatch = useDispatch();
    const [userCredential, setUserCredential ] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const validateUser = () => {
        const newErrors = {};

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(userCredential.email.trim())) {
            newErrors.email = 'Invalid email address';
        }
        else if (!userCredential.email.trim()) {
            newErrors.email = 'Email account is required';
        }
        if (!userCredential.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredential({
            ...userCredential,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if(validateUser()) {
            dispatch(login(userCredential)).unwrap().then((response) => {
                toast.success('Login successful');
                navigate('/dashboard');
            }).catch((error) => {
                toast.error(error)
            })
        }
        else {
            toast.error('Invalid password or username');
        }
    }    

  return (
    <div className='form_admin' >
        <div className="form_cont">
            <div className="form_head">
                <h1>Yogaly</h1>
            </div>
            <form action="" className="form_main" onSubmit={handleLogin}>
                <div className="form_inp">
                    <div className="inp_ctrl">
                        <input onChange={handleChange} name='email' type="email" placeholder='Your Email' />
                        { error.email && <span className='err_msg'>{error.email}</span> }
                    </div>
                    <div className="inp_ctrl">
                        <input onChange={handleChange} name='password' type="password" placeholder='Your Password' />
                        { error.password && <span className='err_msg'>{error.password}</span> }
                    </div>
                </div>
                <div className="submit_btn">
                    <button>Login</button>
                </div>
                <div className="forget">
                    {/* <p>Forgot password</p> */}
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogAdmin