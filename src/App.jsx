/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Inbox from "./pages/Inbox/Inbox";
import { ToastContainer } from "react-toastify";
import "./global.scss";
import { useState } from "react";
import { AuthProvider } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import { Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

const ProtectedRoute = ({ element, redirectTo }) => {
  const isLoggedIn = sessionStorage.getItem("loggedin") === "true";
  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);
  return (
    <>
      <ToastContainer />
      <SpeedInsights />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/inbox"
            element={
              <ProtectedRoute
                element={<Inbox />}
                redirectTo="/"
                condition={currentUser && currentUser.emailVerified}
              />
            }
          />
          <Route
            path="/verify-email"
            element={<VerifyEmail />}
            condition={currentUser && !currentUser.emailVerified}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
