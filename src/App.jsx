import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import TermsOfService from "./pages/termsOfServices/TermsOfService";
import { Toaster } from "react-hot-toast";
import MentorEmails from "./pages/notification/MentorEmails";
import ProtectedRoute from "./components/layout/ProtectedRoute";
const Signup = lazy(() => import("./pages/auth/Signup"));
const Login = lazy(() => import("./pages/auth/Login"));
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy/PrivacyPolicy"));
const Notification = lazy(() => import("./pages/notification/Notification"));
const ThreadView = lazy(() => import("./pages/notification/ThreadView"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route 
              path="/emails" 
              element={
                <ProtectedRoute>
                  <Notification />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/mentor-emails" 
              element={
                <ProtectedRoute>
                  <MentorEmails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/thread/:studentMentorPair" 
              element={
                <ProtectedRoute>
                  <ThreadView />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
