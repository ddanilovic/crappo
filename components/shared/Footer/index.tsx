import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <React.Fragment>
      {/* <div style={{ maxWidth: "1300px", marginRight: 50 }}>
        <hr />
      </div> */}

      <div className="footer_wrapper">
        <p>
          Copyright © 2022 CRAPPO
          <br />
          All rights reserved.
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
