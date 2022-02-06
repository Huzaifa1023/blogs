import React from 'react';
function Button({className,style,title,onClick,icon}) {
  return (
    <button onClick={onClick} className={`${className} text-white rounded-sm px-2 py-1 flex items-center`} style={{...style}}>
        {icon && icon}
        {title}
    </button>
  );
}

export default Button;
