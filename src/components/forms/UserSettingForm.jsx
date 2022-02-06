import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { secondary } from '../../constants/colors';
import Avatar from '../Utils/Avatar';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

function UserSettingForm() {
  return (
    <form className='px-6 mt-2'>
        <h3 className='mb-1'>Profile Picture</h3>
        <div className='flex items-center'>
            <Avatar />
            <label htmlFor='profilePicture' className='cursor-pointer'>
                <IoIosAddCircle size={30} color={secondary} />
                <input type="file" id='profilePicture' className='hidden'/>
            </label>
        </div>
        <div>
            <div className='my-2'>
                <label htmlFor="email">User Name</label>
                <Input type="text"/>
            </div>
            <div className='my-2'>
                <label htmlFor="email">Email</label>
                <Input type="email"/>
            </div>
            <div className='my-2'>    
                <label htmlFor="email">Password</label>
                <Input type="password"/>
            </div>
        </div>
        <div className='flex justify-center py-2'>
            <Button title="Update" className="bg-teal-600" />
        </div>
    </form>
  );
}

export default UserSettingForm;
