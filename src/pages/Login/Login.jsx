import "./Login.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error(
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Please enter a valid email !
        </span>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          toastId: "email-error",
          pauseOnFocusLoss: true,
        }
      );
    }

    if (password.length < 6) {
      return toast.error(
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Password must be longer than 6 chars !
        </span>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          toastId: "password-error",
          pauseOnFocusLoss: true,
        }
      );
    }
    if (signUpClicked && password !== repeatPassword) {
      return toast.error(
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Passwords are not matching !
        </span>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          toastId: "password-match-error",
          pauseOnFocusLoss: true,
        }
      );
    }

    if (signUpClicked) {
      createUser();
    } else {
      handleLogin();
    }
  };

  const createUser = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success(
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Successfully created account !
        </span>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          toastId: "account-created",
          pauseOnFocusLoss: true,
        }
      );
      sendEmailVerification(auth.currentUser);
      setTimeActive(true);
      navigate("/verify-email");
      console.log(response);
    } catch (e) {
      console.log(e.message);
      if (e.message === "Firebase: Error (auth/email-already-in-use).") {
        return toast.error(
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Email already in use !
          </span>,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            toastId: "email-already-in-use",
            pauseOnFocusLoss: true,
          }
        );
      }
    }
  };
  const handleLogin = async () => {
    if (signUpClicked) return;
    else {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (!auth.currentUser.emailVerified) {
          setTimeActive(true);
          toast.success(
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              You need to verify your email !
            </span>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
              toastId: "verify your email",
              pauseOnFocusLoss: true,
            }
          );
          sessionStorage.setItem("loggedin",true);
          navigate("/verify-email");
          console.log(response);
        } else {
          sessionStorage.setItem("loggedin", true);
          navigate("/inbox");
          console.log(response);
        }
      } catch (e) {
        console.log(e.message);
        if (e.message === "Firebase: Error (auth/invalid-credential).") {
          return toast.error(
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Password or Email is wrong !
            </span>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
              toastId: "wrong-password",
              pauseOnFocusLoss: true,
            }
          );
        }
        if (e.message === "Firebase: Error (auth/user-not-found).") {
          return toast.error(
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              User not found !
            </span>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
              toastId: "user-not-found",
              pauseOnFocusLoss: true,
            }
          );
        }
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginContainer__imageContainer">
        <img
          src="/images/header_logo_en_20230626.png"
          alt="RUTILEA | Unleashing AI for ALL: Zero Code, Zero Hassle"
          className="loginContainer__imageContainer__image"
          loading="lazy"
        />
      </div>
      <div className="loginContainer__right">
        <form className="loginContainer__right__form" onSubmit={handleSubmit}>
          <span className="loginContainer__right__form__welcome-text">
            Welcome {signUpClicked ? null : "Back"}
            <div className="loginContainer__right__form__welcome-text__signup">
              {signUpClicked ? null : "Not a member yet ?"}
              <div className="loginContainer__right__form__welcome-text__signup__button">
                {signUpClicked ? (
                  <span
                    onClick={() => {
                      setSignUpClicked(false);
                      setEmail("");
                      setPassword("");
                      setRepeatPassword("");
                    }}
                  >
                    Login
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setSignUpClicked(true);
                      setEmail("");
                      setPassword("");
                    }}
                  >
                    Signup
                  </span>
                )}
              </div>
            </div>
          </span>
          <div className="loginContainer__right__form__email">
            <input
              type="text"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
            <label className="label">Email</label>
          </div>
          <div className="loginContainer__right__form__password">
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <label className="label">Password</label>
          </div>
          {signUpClicked ? (
            <div className="loginContainer__right__form__password">
              <input
                type="password"
                placeholder=" "
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                autoComplete="current-password"
              />
              <label className="label">Repeat Password</label>
            </div>
          ) : null}

          <button className="loginContainer__right__form__button" type="submit">
            {signUpClicked ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
