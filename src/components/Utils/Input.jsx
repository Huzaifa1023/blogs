import React from 'react';

function Input({type,htmlFor}) {
  return (
      <>
            <input type={type} htmlFor={htmlFor} className='outline-none block w-full px-2 py-1 rounded-sm bg-slate-200' />
      </>
  );
}

export default Input;
