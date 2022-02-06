import React from 'react'
import { GiExitDoor } from 'react-icons/gi'
import RegisterForm from '../components/forms/RegisterForm'
import Button from '../components/Utils/Button'

function Register() {
  return (
    <div className="h-screen w-full bg-cover flex justify-center items-center bg-gradient-to-r from-red-500 to-white">
      <Button
        title="Login"
        className="bg-red-400 absolute top-5 right-10"
        icon={<GiExitDoor />}
      />
      <div className="w-1/2 min-h-72 bg-white px-4 py-4 rounded-md">
        <h1 className="text-2xl mb-4">Register</h1>
        <RegisterForm />
        <div className="flex justify-center mt-4">
          <Button className="bg-red-400" title="Register" />
        </div>
      </div>
    </div>
  )
}

export default Register
