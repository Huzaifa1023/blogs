import React from 'react';

function Badge({text,className}) {
  return (
  <div className={`py-1 px-2 bg-slate-200 rounded-lg ${className}`}>
      <p>{text}</p>
  </div>
  );
}

export default Badge;
