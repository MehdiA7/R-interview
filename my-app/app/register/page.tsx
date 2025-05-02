import React from 'react'
import RegisterForm from '@/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
        <h1 className='text-[41px] font-semibold mb-14'>Create an account</h1>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage