import React from 'react';
import UserSettingForm from '../components/forms/UserSettingForm';
import Sidebar from '../components/Sidebar';

function Settings() {
  return (
  <div className='flex'>
      <div className='flex-[7]'>
            <UserSettingForm/>
      </div>
      <div className='flex-[2]'>
        <Sidebar/>
      </div>
  </div>)
  ;
}

export default Settings;
