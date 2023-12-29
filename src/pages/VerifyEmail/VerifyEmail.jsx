import { useAuthValue } from "../../AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            window.location.href = "/";
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, [navigate, currentUser]);
  const { timeActive, setTimeActive } = useAuthValue();
  const [time, setTime] = useState(60);
  const resendEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      setTimeActive(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);

  return (
    <div>
      <h1>Verify your email</h1>
      <p>
        We sent an email to {currentUser?.email}. Please click the link in the
        email to verify your email address.
      </p>
      <button onClick={resendEmail} disabled={timeActive}>
        Resend email {timeActive && time}
      </button>
    </div>
  );
}
