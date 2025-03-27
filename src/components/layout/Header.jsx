import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    link: "/terms-of-service",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in by making a request to our auth status endpoint
    const checkAuth = async () => {
      try {
        const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;
        if (!serverUrl) return;
        
        console.log("Checking authentication status...");
        
        // Try to fetch data from our auth status endpoint
        const response = await axios.get(`${serverUrl}/auth/status`, { 
          withCredentials: true 
        });
        
        console.log("Auth check successful, user is logged in:", response.data);
        
        // If we get here without an error, user is authenticated
        setIsLoggedIn(true);
      } catch (error) {
        console.log("Auth check failed, user is not logged in:", error.message);
        
        // If we get an error, user is not authenticated
        setIsLoggedIn(false);
      }
    };
    
    checkAuth();
  }, [pathname]);
  
  const handleLogout = async () => {
    try {
      const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;
      if (!serverUrl) return alert("Server URL not found");
      
      console.log("Logging out, making request to:", `${serverUrl}/logout`);
      
      const response = await axios.get(`${serverUrl}/logout`, {
        withCredentials: true,
      });
      
      console.log("Logout successful:", response.data);
      
      // Clear local state indicating user is logged in
      setIsLoggedIn(false);
      
      // Navigate to homepage
      navigate("/");
      
      // Force a complete page refresh as a fallback
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-indigo-900 to-blue-900 shadow-lg">
      <section className="container mx-auto flex items-center justify-between h-[80px] px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-white font-bold text-xl md:text-2xl">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">Mentor</span>
            <span className="font-light text-white"> Communication</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((page, i) => (
            <Link
              to={page.link}
              key={i}
              className={`text-sm font-medium hover:text-amber-200 transition-colors duration-200 relative ${
                pathname === page.link ? "text-amber-300" : "text-gray-100"
              }`}
            >
              {page.title}
              {pathname === page.link && (
                <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-amber-300 rounded-full"></span>
              )}
            </Link>
          ))}
          
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 px-4 py-1.5 rounded-md text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 px-4 py-1.5 rounded-md text-indigo-900 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          )}
        </nav>
        <div className="md:hidden">
          {/* Mobile login/logout button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 px-3 py-1 rounded-md text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 px-3 py-1 rounded-md text-indigo-900 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
