import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndaddress } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const email = user?.email;

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressdBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    // const handleErrorBlur = event => {
    //     setEmail(event.target.value);
    // }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser} className='form'>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={email} readOnly  type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input  onBlur={handleAddressdBlur} type="text" name='address' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur}  type="text" name='phone-number' required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;