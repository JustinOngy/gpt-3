import React from "react";
import "./popup.css";

const Popup = ({ imgUrl, text, date, closePopup }) => {
  return (
    <div className="popup__overlay" onClick={closePopup}>
      <div className="popup__content">
        <img src={imgUrl} alt="Article" className="popup__image" />
        <div className="popup__text">
          <h2 className="popup__title">{text}</h2>
          <p className="popup__date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
