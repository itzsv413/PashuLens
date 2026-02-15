import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/breed-detection', label: 'Breed Detection' },
    // { path: '/services', label: 'Services' },
    // { path: '/why-us', label: 'Why Us' },
    // { path: '/about', label: 'About' },
    // { path: '/contact', label: 'Contact' },
    // { path:'/signup', label: 'Sign up'},
    // { path: '/login', label: 'Login' }
  ];

  const navigate = useNavigate();

const [user, setUser] = useState<any>(null);

useEffect(() => {
  const checkUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  checkUser();

  window.addEventListener("storage", checkUser);

  return () => {
    window.removeEventListener("storage", checkUser);
  };
}, []);




const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setUser(null);
  navigate("/");
};


  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-800">PashuLens</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {user ? (
  <div className="flex items-center space-x-4">
  {/* User Badge */}
  <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full">
    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
      {user.name.charAt(0).toUpperCase()}
    </div>
    <span className="text-green-800 font-medium text-sm">
      {user.name}
    </span>
  </div>

  {/* Logout Button */}
  <button
    onClick={handleLogout}
    className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200"
  >
    Logout
  </button>
</div>

) : (
  <div className="flex space-x-4">
    <Link to="/login" className="text-gray-700 hover:text-green-600">
      Login
    </Link>

    <Link to="/signup" className="text-green-600 font-medium">
      Sign Up
    </Link>
  </div>
)}


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}