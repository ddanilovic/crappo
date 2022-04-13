import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__header">
        <div className="hero__header__sub">
          <p>Built on ETH. Powered by you.</p>
        </div>
        <h1>The Future of Trading is here</h1>
        <p>
          Leverage on any tokens with a protocol trusted with billions for its
          price execution, super low fees and reliability.
        </p>
        <div className="hero__header__buttons">
          <Button variant="outlined">Start Trading</Button>
          <Button variant="outlined">Add liquidity</Button>
        </div>
      </div>
      <div className="hero__image">
        <Image src="/static/Illustration.svg" alt="" width={604} height={585} />
      </div>
    </div>
  );
};

export default Hero;
