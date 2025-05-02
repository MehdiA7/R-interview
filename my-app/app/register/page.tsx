import React from 'react'
import RegisterForm from '@/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
        <h1 className='text-4xl font-medium mb-20'>Create an account</h1>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage