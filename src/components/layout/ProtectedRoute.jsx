import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;
        if (!serverUrl) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        await axios.get(`${serverUrl}/auth/status`, {
          withCredentials: true
        });
        
        // If we get here without an error, user is authenticated
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        console.log("Not authenticated, redirecting to login");
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated, saving the location they tried to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;