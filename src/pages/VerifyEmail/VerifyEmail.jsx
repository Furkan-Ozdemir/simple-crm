import { useAuthValue } from "../../AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyEmail.module.scss";

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
    <div className={styles.container}>
      <h1 className={styles.header}>Verify your email</h1>
      <p className={styles.text}>
        We sent an email to <span>{currentUser?.email}</span> . Please click the
        link in the email to verify your email address.
      </p>
      <button
        onClick={resendEmail}
        disabled={timeActive}
        className={styles.button}
      >
        Resend email {timeActive && time}
      </button>
    </div>
  );
}
