import Email from "../../components/Email/Email";
import EmailList from "../../components/EmailList/EmailList";
import "./Inbox.scss";
export default function Inbox() {
  return (
    <>
      <nav className="inbox__nav">
        <img
          src="/images/header_logo_en_20230626.png"
          alt="RUTILEA | Unleashing AI for ALL: Zero Code, Zero Hassle"
          className="inbox__nav__image"
        />
        <div className="inbox__nav__search">
          <input type="search" id="gsearch" name="gsearch" />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="inbox__tabs">
        <div className="inbox__tabs__svg__container">
          <div className="inbox__tabs__svg__container__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-archive-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
            </svg>
          </div>
          <span className="inbox__tabs__svg__container__text">archive</span>
        </div>
        <div className="inbox__tabs__svg__container">
          <div className="inbox__tabs__svg__container__svg">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
            </svg>
          </div>
          <span className="inbox__tabs__svg__container__text">trash</span>
        </div>
        <div className="inbox__tabs__svg__container">
          <div className="inbox__tabs__svg__container__svg">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <span className="inbox__tabs__svg__container__text">starred</span>
        </div>
      </div>
      <aside className="inbox__aside">
        <div className="inbox__aside__emailList">
          <EmailList />
        </div>
      </aside>
    </>
  );
}
