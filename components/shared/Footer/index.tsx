import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <React.Fragment>
      <hr style={{ margin: "0 auto", maxWidth: "1300px" }} />

      <div className="footer_wrapper">
        <p>
          Copyright blabla
          <br />
          All rights reserved. | Privacy
        </p>
        {/* <div>
        <img src="/static/logo.svg" alt="logo" />
      </div> */}
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
    </React.Fragment>
  );
};

export default Footer;
