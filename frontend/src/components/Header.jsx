t"use client";

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import Link from 'next/link';
import { useTheme } from '../utils/theme';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            DEVOUR TO CRUSH
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/questions" className="text-base-content hover:text-primary">
              Questions
            </Link>
            <Link href="/exam" className="text-base-content hover:text-primary">
              Exam Simulator
            </Link>
            <Link href="/dashboard" className="text-base-content hover:text-primary">
              Dashboard
            </Link>
            <Link href="/community" className="text-base-content hover:text-primary">
              Community
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <select
              className="select select-bordered select-sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="eye-care">Eye-Care</option>
            </select>

            {isAuthenticated ? (
              <>
                <span className="text-base-content">Welcome, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="space-x-2">
                <Link
                  href="/auth/login"
                  className="btn btn-primary btn-sm"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="btn btn-secondary btn-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
