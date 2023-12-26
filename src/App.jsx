import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Inbox from "./pages/Inbox/Inbox";
import { ToastContainer } from "react-toastify";
import "./global.scss";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/signup" element={<div>sign up</div>} />
      </Routes>
    </>
  );
}

export default App;
