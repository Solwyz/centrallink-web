import React, { useState } from 'react'

function AdminLogin() {
    const [phoneOrEmail, setPhoneOrEmail] = useState('')
    const [phoneOrEmailError, setPhoneOrEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        phoneOrEmail: '',
        password: '',
    });
    const [isForgotPassword, setIsForgotPassword] = useState(false)

    const handleSignIn =(e)=> {
        localStorage.setItem('adminToken',password)
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneOrEmail') {
            setPhoneOrEmail(value);

            if (value.trim() === '') {
                setErrors((prev) => ({ ...prev, phoneOrEmail: 'This field is required.' }));
            } else if (!/^\S+@\S+\.\S+$/.test(value) && !/^\d+$/.test(value)) {
                setErrors((prev) => ({ ...prev, phoneOrEmail: 'Enter a valid email or phone number.' }))
            } else {
                setErrors((prev) => ({ ...prev, phoneOrEmail: '' }));
            }
        }

        if (name === 'password') {
            setPassword(value);

            if (value.trim() === '') {
                setErrors((prev) => ({ ...prev, password: 'This field is required.' }));
            } else if (value.length < 6) {
                setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters.' }))
            } else {
                setErrors((prev) => ({ ...prev, password: '' }));
            }
        }
    }

    const isFormValid = phoneOrEmail && password && !errors.phoneOrEmail && !errors.password;


    return (
        <div>
            <div className='flex bg-[#FBFEFF] p-6 font-Popins h-screen'>
                <div className='bg-adminLogin bg-cover w-[45%] h-full sm:pl-[40px] rounded-3xl text-[#FFFFFF]'>
                    <div className='text-[32px] font-bold mt-[450px]'>Sustainable Ingredients, </div>
                    <div className='text-[24px] font-normal'>Global Impact  </div>
                </div>
                <div className='flex items-center w-[55%] sm:pl-[154px]'>
                    <div className='sm:pt-[64px] '>
                        <div>
                            <div className='bg-[#FFFFFF] p-12 max-w-[474px] rounded-lg drop-shadow-lg border'>
                                <div className='text-[24px] font-medium text-[#0C1421]'>Welcome Back</div>
                                <div className='text-[14px] font-normal text-[#1A5E71] tracking-wide max-w-[330px] mt-6'>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</div>

                                <form onSubmit={handleSignIn}>
                                    <div className='mt-20'>
                                        <label className="text-sm font-normal text-[#1C2532]">Email/Phone Number</label>
                                        <input
                                            type='text'
                                            name='phoneOrEmail'
                                            value={phoneOrEmail}
                                            onChange={handleInputChange}
                                            className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                                            placeholder="Enter your phone number or email"
                                        ></input>
                                        {errors.phoneOrEmail && <p className='text-red-500 text-[12px]'>{errors.phoneOrEmail}</p>}
                                    </div>
                                    <div className='mt-6'>
                                        <label className="text-sm font-normal text-[#1C2532]">Password</label>
                                        <input
                                            type='password'
                                            name='password'
                                            value={password}
                                            onChange={handleInputChange}
                                            className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                                            placeholder="Enter password"
                                        ></input>
                                        {errors.password && <p className='text-red-500 text-[12px]'>{errors.password}</p>}
                                    </div>
                                    <div className="text-[14px] text-[#1E4AE9] tracking-wide font-normal font-Popins mt-4 cursor-pointer w-fit ml-auto" onClick={() => setIsForgotPassword(true)}>Forgot Password?</div>
                                    <button
                                        type='submit'
                                        className={`w-full py-2 px-2 rounded-lg mt-6 font-Popins font-normal text-white ${isFormValid ? 'bg-[#29C5F2]' : 'bg-[#D0C6EF] cursor-not-allowed'}`}
                                        disabled={!isFormValid}
                                    >
                                        Sign In
                                    </button>
                                </form>
                            </div>
                             
                        </div>

                        <div className='text-[12px] font-normal text-[#959CB6] mt-[20%] text-center'>© 2024 ALL RIGHTS RESERVED</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
