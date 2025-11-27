import React from 'react';
import { assets } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useUser();
  return (
    <div
      className="flex w-full  items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36
      border-b border-gray-500 py-4 bg-cyan-100/70"
    >
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className="w-28 lg:w-32" />
      </Link>
      <div className="flex gap-1 items-center justify-around text-gray-500">
        <Link to="/my-enrollments">Student Portal</Link>|
        <p>Hi {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton /> : <img className="max-w-8" src={assets.profile_img} />}
      </div>
    </div>
  );
};

export default Navbar;
