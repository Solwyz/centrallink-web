import React, { useState } from 'react'
import OtpReader from './OtpReader';

function ResetPassword() {
 
    const [resetPhoneOrEmail, setResetPhoneOrEmail] = useState('')
    const [errors, setErrors] = useState('')
    const [isOtpReader, setIsOtpReader] = useState(false)


    const validateInput = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (emailRegex.test(value) || phoneRegex.test(value)) {
            setErrors('');
        } else {
            setErrors('Please enter a valid email or 10-digit phone number.');
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setResetPhoneOrEmail(value)
        validateInput(value);
    }

    const handleSubmit = (e) => {
        setIsOtpReader(true)
    }

    const isFormValid = resetPhoneOrEmail && !errors;

    return (
        <div>
        {!isOtpReader ?
            <div className='bg-[#FFFFFF] p-12 max-w-[474px] rounded-lg drop-shadow-lg border'>
                <div className='text-[24px] font-medium text-[#0C1421]'>Reset Password</div>
                <div className='text-[14px] font-normal text-[#947F41] tracking-wide max-w-[330px] mt-6'>We will send an OTP to registered mail</div>

                <form onSubmit={handleSubmit}>
                    <div className='mt-20'>
                        <label className="text-sm font-normal text-[#1C2532]">Email/Phone Number</label>
                        <input
                            type='text'
                            name='resetPhoneOrEmail'
                            value={resetPhoneOrEmail}
                            onChange={handleInputChange}
                            className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                            placeholder="Enter your phone number or email"
                        ></input>
                        {errors && <p className='text-red-500 text-[12px] mt-1'>{errors}</p>}
                    </div>
                    <button
                        type='submit'
                        className={`w-full py-2 px-2 rounded-lg mt-[43px] font-Popins font-normal text-white mb-[154px] ${isFormValid ? 'bg-[#947F41]' : 'bg-[#D0C6EF] cursor-not-allowed'}`}
                        disabled={!isFormValid}
                    >
                        Send OTP
                    </button>
                </form>
            </div>
            : <OtpReader/> }

        </div>
    )
}

export default ResetPassword
