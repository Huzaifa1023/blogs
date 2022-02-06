import React from 'react';
import Input from '../Utils/Input';

function RegisterForm() {
  return (
    <>
    <form>
        <div className='my-2'>    
            <label htmlFor="userName">User Name</label>
            <Input htmlFor="userName" type="name" />
        </div>
        <div className='my-2'>    
            <label htmlFor="email">Email</label>
            <Input htmlFor="email" type="email" />
        </div>

        <div className='my-2'>    
            <label htmlFor="password">Password</label>
            <Input htmlFor="password" type="password" />
        </div>
    </form>
  </>
  );
}

export default RegisterForm;
