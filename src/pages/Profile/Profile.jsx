import "./Profile.scss";
import { useAuthValue } from "../../AuthContext";
import { useState } from "react";

export default function Profile() {
  const { currentUser } = useAuthValue();
  const [showProfile, setShowProfile] = useState(false);
  console.log(currentUser);
  return (
    <>
      <div className={`count`} onClick={() => setShowProfile(!showProfile)}>
        6
      </div>
      <div className={`${showProfile ? "show" : "hide"} profile`}>
        <p className="profile__email">
          <span>{currentUser?.email}</span>
        </p>
        <div
          className="profile__close"
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <p className="profile__verified">
          <span
            className={`tag ${
              currentUser?.emailVerified ? "approved" : "waiting"
            }`}
          >
            {`${
              currentUser?.emailVerified === true
                ? "Email Verified"
                : "Email Not Verified"
            } `}
          </span>
        </p>
        <button className="profile__signOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </>
  );
}
