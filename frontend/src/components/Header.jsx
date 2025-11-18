import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import Link from 'next/link';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DEVOUR TO CRUSH
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/questions" className="text-gray-700 hover:text-blue-600">
              Questions
            </Link>
            <Link href="/exam" className="text-gray-700 hover:text-blue-600">
              Exam Simulator
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600">
              Community
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-700">Welcome, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="space-x-2">
                <Link
                  href="/auth/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
