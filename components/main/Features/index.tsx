import { Button } from "@mui/material";
import React from "react";
import Feature from "../../shared/Feature";

const Features = () => {
  return (
    <div className="features_wrapper">
      <Feature
        title="Fully decentralized. Completely secure."
        text=" We have all been in this industry too long not to make the security
            of your funds our absolute top priority. We’ve received multiple
            audits from Open Zeppelin and Trail of Bits, as well as code reviews
            from white hat researchers."
        image={`ws-img.svg`}
      />
      <section className="feature features_two">
        <h2>Built on web3. Owned by you.</h2>
        <p>
          We have all been in this industry too long not to make the security of
          your funds our absolute top priority. We’ve received multiple audits
          from Open Zeppelin and Trail of Bits, as well as code reviews from
          white hat researchers.
        </p>
        <div className="feature_img">
          <img src="/static/ws-img.svg" />
        </div>
      </section>
      <section className="feature features_three">
        <h2>
          Take full advantage of everything Arbitrum and Avalanche have to
          offer.
        </h2>
        <div className="feature_list">
          {[1, 2, 3].map((id) => {
            return (
              <div className="feature_list_item" key={id}>
                <div className="feature_list_img">
                  <img src="/static/icons/deploy-service.png" alt="deploy" />
                </div>
                <p>Say goodbye to eye-watering gas fees</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="feature features_four">
        <h2>
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h2>
        <p>
          We have all been in this industry too long not to make the security of
          your funds our absolute top priority. We’ve received multiple audits
          from Open Zeppelin and Trail of Bits, as well as code reviews from
          white hat researchers.
        </p>
        <Button variant="contained">Join community</Button>
        <div className="feature_img">
          <img src="/static/ws-img.svg" />
        </div>
      </section>
    </div>
  );
};

export default Features;
