import React, { useState } from 'react'

function NewPassword() {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errors, setErrors] = useState({
        newPassword: '',
        confirmNewPassword: '',
    })

    const validateNewPassword = (value) => {
        if (value.length < 6) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                newPassword: 'Password must be atleast 6 characters',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                newPassword: ''
            }));
        }
    }

    const validateConfirmPassword = (value) => {
        if (value !== newPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmNewPassword: 'Password do not match.',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmNewPassword: ''
            }))
        }
    }

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        validateNewPassword(value);
    }

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmNewPassword(value);
        validateConfirmPassword(value);
    }

    const isFormValid = newPassword.length >= 6 && confirmNewPassword === newPassword;

    return (
        <div>
            <div className='bg-[#FFFFFF] p-12 max-w-[474px] rounded-lg drop-shadow-lg border'>
                <div className='text-[24px] font-medium text-[#0C1421]'>Change Password</div>
                <div className='text-[14px] font-normal text-[#947F41] tracking-wide max-w-[330px] mt-6'>Enter new password</div>

                <form>
                    <div className='mt-11'>
                        <label className="text-sm font-normal text-[#1C2532]">Enter new Password</label>
                        <input
                            type='password'
                            name='newPassword'
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                            placeholder="Enter new password"
                        ></input>
                        {errors.newPassword && <p className='text-red-500 text-[12px] mt-1'>{errors.newPassword}</p>}
                    </div>
                    <div className='mt-6'>
                        <label className="text-sm font-normal text-[#1C2532]">Confirm New Password</label>
                        <input
                            type='password'
                            name='confirmNewPassword'
                            value={confirmNewPassword}
                            onChange={handleConfirmPasswordChange}
                            className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                            placeholder="Confirm new password"
                        ></input>
                        {errors.confirmNewPassword && <p className='text-red-500 text-[12px] mt-1'>{errors.confirmNewPassword}</p>}
                    </div>
                    <button
                        type='submit'
                        className={`w-full py-2 px-2 h-12 rounded-lg mt-8 font-Popins font-normal text-white cursor-pointer ${isFormValid ? 'bg-[#947F41]' : 'bg-[#D0C6EF] cursor-not-allowed'}`}
                        disabled={isFormValid}
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword
