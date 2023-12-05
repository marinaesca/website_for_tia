
import React from 'react';

const Navigation = () => {
  return (
    <div>
      <ul className='flex bg-teal-400 cursor-pointer'>
        <li className='mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition'> | Tia bo bia pia | </li>
        <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'> Display Art </li>
        <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'> Store Art </li>
        <li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'> User Art </li>
      </ul>
    </div>
  );
};

export default Navigation;
