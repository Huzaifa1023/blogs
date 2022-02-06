import React from 'react';
import Input from '../Utils/Input'
function LoginForm() {
  return (
      <>
        <form>
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

export default LoginForm;
