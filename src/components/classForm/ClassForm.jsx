import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import './classForm.css';
import { handleOpenPayForm } from '../../store/dashStore';

function ClassForm({ title, tutor, time, description, price }) {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const placeOrder = (e) => {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.trim()) {
            setError('Email account is required');
        }
        else if (!emailPattern.test(email.trim())) {
            setError('Invalid email address');
        }
        else {
            setError('');
            initializePayment(onSuccess, onClose)
        }
    }

    //paystack payment configuration
    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_8b50893a5891d0e9440ac570f6c142448d2161e3',
    };

    const onSuccess = () => {
        toast.success('Order has been placed successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
        dispatch(handleOpenPayForm());
        navigate('/');
    };

    const onClose = () => {
        toast.info('Order closed', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    }

    //initialize payment configuration
    const initializePayment = usePaystackPayment(config);

    return (
        <div className='class_form'>
            <div className='class_cont'>
                <div onClick={() => dispatch(handleOpenPayForm())} className="close">
                    <AiOutlineClose />
                </div>
                <div className="class_main">
                    <div className="class_head">
                        <h3>{title}</h3>
                        <p>{tutor} | {time}</p>
                    </div>
                    <div className="class_main">
                        <p>{description}</p>
                    </div>
                </div>
                <div className='emailInp'>
                    <input onChange={handleChange} type="email" placeholder='Your email' value={email} />
                    {error && <p className='err-msg'>{error}</p>}
                </div>
                <div className="class_btn">
                    <button onClick={placeOrder}>book class for ({price})</button>
                </div>
            </div>
        </div>
    )
}

export default ClassForm