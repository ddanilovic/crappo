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
          text="We have all been in this industry too long not to make the security of
          your funds our absolute top priority. We’ve received multiple audits
          from Open Zeppelin and Trail of Bits, as well as code reviews from
          white hat researchers."
          image={`ws-img.svg`}
        />
      </section>
      <section className="feature features_three">
        <Feature
          title="Take full advantage of everything Arbitrum and Avalanche have to
          offer."
          text="We have all been in this industry too long not to make the security of
          your funds our absolute top priority. We’ve received multiple audits
          from Open Zeppelin and Trail of Bits, as well as code reviews from
          white hat researchers."
          image={`ws-img.svg`}
        />
      </section>
      <section className="feature features_four">
        <Feature
          title="Market sentiments, portfolio, and run the infrastructure of your
          choice."
          text="We have all been in this industry too long not to make the security of
          your funds our absolute top priority. We’ve received multiple audits
          from Open Zeppelin and Trail of Bits, as well as code reviews from
          white hat researchers."
          image={`ws-img.svg`}
        />
      </section>
    </div>
  );
};

export default Features;
