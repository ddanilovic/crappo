import React from "react";

const Feature = ({ title, text, image }) => {
  return (
    <section className="feature features_one">
      <h2>{title}</h2>
      <p>{text}</p>
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
      <div className="feature_img">
        <img src={`/static/${image}`} />
      </div>
    </section>
  );
};

export default Feature;
