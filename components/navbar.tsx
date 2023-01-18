import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-orange-200 sticky top-0 h-10 border-b-2 border-black z-[2]'>
      <ul className='flex justify-between items-center text-2xl'>
        <li>💻</li>
        <li>☀</li>
      </ul>
    </nav>
  );
};

export default Navbar;
