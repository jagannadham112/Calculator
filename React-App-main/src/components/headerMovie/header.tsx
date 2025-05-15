import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <NavLink to="/" className="text-2xl font-semibold">My Cinema App</NavLink>
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies/trending"
          className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}
        >
          Trending
        </NavLink>
        {/* …other links */}
      </nav>
    </div>
  </header>
);

export default Header;
