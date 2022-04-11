import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <p>
        Copyright blabla
        <br />
        All rights reserved. | Privacy
      </p>
      <div>
        <img src="/static/logo.svg" alt="logo" />
      </div>
      <div className="footer_social">
        <div className="footer_icon">
          {/* <img src="/static/eth.svg" alt="discord" /> */}
          <InstagramIcon />
        </div>
        <div className="footer_icon">
          {/* <img src="/static/eth.svg" alt="twitter" /> */}
          <TelegramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
