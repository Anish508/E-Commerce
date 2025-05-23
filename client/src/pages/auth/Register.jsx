import React from 'react'
import { Link } from 'react-router-dom';
import CommonForm from '@/components/Common/Form';
import { registerFormControls } from '@/config';
import { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password:'',
}
function AuthRegister() {
  
  function onSubmit(){

  }

  const [formData, setFormData] = useState(initialState)
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
        <p className='mt-2'>Already have an account?
          <Link to='/auth/login' className='font-medium ml-2 text-primary hover:underline'>Login</Link>
        </p>
      </div>
      <CommonForm
      formControls={registerFormControls}
      formData = {formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      buttonText= {'Sign Up'}
      />
    </div>
  )
}

export default AuthRegister;
