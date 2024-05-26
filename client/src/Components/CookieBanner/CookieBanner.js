import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    const expirationDays = 1;
    const expirationTime = new Date(
      new Date().getTime() + expirationDays * 24 * 60 * 60 * 1000
    );
    localStorage.setItem("cookiesAccepted", true);
    localStorage.setItem("cookiesExpiration", expirationTime.toISOString());
    setAccepted(true);
    console.log("Cookies accepted");
  };

  const handleDecline = () => {
    localStorage.removeItem("cookiesAccepted");
    localStorage.removeItem("cookiesExpiration");
    setAccepted(false);
    console.log("Cookies declined");
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    const cookiesExpiration = localStorage.getItem("cookiesExpiration");
    const isCookieExpired = new Date(cookiesExpiration) < new Date();

    console.log("cookiesAccepted:", cookiesAccepted);
    console.log("cookiesExpiration:", cookiesExpiration);
    console.log("isCookieExpired:", isCookieExpired);

    if (cookiesAccepted && !isCookieExpired) {
      setAccepted(true);
    }
  }, []);

  if (accepted) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to personalize content and ads, to provide social media
        features, and to analyze our traffic. By continuing to use our site, you
        accept our use of cookies.
      </p>
      <button className="accept" onClick={handleAccept}>
        Accept
      </button>
      <button className="decline" onClick={handleDecline}>
        Decline
      </button>
    </div>
  );
};

export default CookieBanner;
