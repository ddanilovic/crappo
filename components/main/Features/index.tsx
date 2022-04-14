import { Button } from "@mui/material";
import React from "react";
import Feature from "../../shared/Feature";

const Features = () => {
  return (
    <div className="features_wrapper">
      <section className="feature features_one">
        <Feature
          title="Fully decentralized. Completely secure."
          text=" We have all been in this industry too long not to make the security
            of your funds our absolute top priority. We’ve received multiple
            audits from Open Zeppelin and Trail of Bits, as well as code reviews
            from white hat researchers."
          image={`ws-img.svg`}
        />
      </section>
      <section className="feature features_two">
        <Feature
          title="Built on web3. Owned by you."
          text="Want leveraged exposure on your favorite crypto assets? Get enough people from the Futureswap community to back you and the protocol will automatically add it as an exchange."
          image={`ws-img2.svg`}
        />
      </section>
      <section className="feature features_three">
        <Feature
          title="Take full advantage of everything Arbitrum and Avalanche have to
          offer."
          text="Want to passively earn high yields from trade fees and FST rewards? Simply provide liquidity."
          image={`ws-img3.svg`}
        />
      </section>
    </div>
  );
};

export default Features;
