import React, { useState } from 'react'
import NewPassword from './NewPassword';

function OtpReader() {
 
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [isChangePassword, setIsChangePassword] = useState(false)

    const handleChange = (element, index) => {
        const value = element.value.replace(/\D/g, '');
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (element.nextSibling) {
                element.nextSibling.focus();
            }
        }
    }

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            const newOtp = [...otp];

            if (!otp[index] && index > 0) {
                event.target.previousSibling.focus();
            }

            newOtp[index] = '';
            setOtp(newOtp);
        }
    }

    const handleSubmit =()=> {
        setIsChangePassword(true);
    }

    const isOtpComplete = otp.every(value => value !== '');

    return (
        <div>
        {!isChangePassword ? 
            <div className='bg-[#FFFFFF] p-12 max-w-[474px] rounded-lg drop-shadow-lg border'>
                <div className='text-[24px] font-medium text-[#0C1421]'>Enter OTP</div>
                <div className='text-[14px] font-normal text-[#947F41] tracking-wide max-w-[330px] mt-6'>Enter OTP here</div>

                <form onSubmit={handleSubmit}>
                    <div className='mt-20'>
                        <div className='flex justify-between gap-3 mt-10'>
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength='1'
                                    value={otp[index]}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className='w-10 h-10 text-center border border-[#B3B3B3] rounded focus:outline-none text-lg'></input>
                            ))}
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={`w-full py-2 px-2 rounded-lg mt-[43px] font-Popins font-normal text-white ${isOtpComplete ? 'bg-[#947F41]' : 'bg-[#D0C6EF] cursor-not-allowed'}`}
                        disabled={!isOtpComplete}
                    >
                        Proceed
                    </button>
                    <div className='mt-[40px] mb-[154px]'>
                        <div className='text-[14px] font-medium text-[#313957] text-center'>Don't recieve? <span className='text-[#000CB3] cursor-pointer'>Resend</span></div>
                    </div>
                </form>

            </div>
            : <NewPassword/> }
        </div>
    )
}

export default OtpReader
