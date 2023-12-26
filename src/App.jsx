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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/signup" element={<div>sign up</div>} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
