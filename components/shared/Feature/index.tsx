import React from "react";

type FeatureListItem = {
  title: string;
  id: number;
  image: string;
  text: string;
};

type FeatureDocument = {
  title: string;
  list?: [FeatureListItem];
  image: string;
  text?: string;
};

const Feature = ({ title, text, image, list }: FeatureDocument) => {
  return (
    <React.Fragment>
      <div className="feature_text">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {list && (
          <div className="feature_list">
            {list.map((item: FeatureListItem) => {
              return (
                <div className="feature_list_item" key={item.id}>
                  <div className="feature_list_img">
                    <img src={`/static/${item.image}`} alt={item.title} />
                  </div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="feature_img">
        <img src={`/static/${image}`} />
      </div>
    </React.Fragment>
  );
};

export default Feature;
