import React from 'react';
import { GiExitDoor } from 'react-icons/gi';
import cover from '../assets/cover.jpg'
import LoginForm from '../components/forms/LoginForm';
import Button from '../components/Utils/Button';
function Login() {
  return (
    <div className='h-screen w-full bg-cover flex justify-center items-center bg-gradient-to-r from-teal-600 to-white'>
        <Button title="Login" className="bg-teal-600 absolute top-5 right-10" icon={<GiExitDoor/>}/>
        <div className='w-1/2 h-72 bg-white px-4 py-4 rounded-md'>
            <h1 className='text-2xl mb-4'>Login</h1>
            <LoginForm/>
            <div className='flex justify-center mt-4'>
                <Button className="bg-teal-600" title="login"/>
            </div>
        </div>
    </div>
  );
}

export default Login;
