import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
function Avatar({imgSrc,size=32}) {
  return (
  <div style={{width:size*1.5,height:size*1.5}} className="bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
      {imgSrc ? <img src={imgSrc} width="100%" height="100%"/> : <AiOutlineUser size={size}/>}
  </div>
  );
}

export default Avatar;
