import React from "react";

const optionsContent = [
  {
    id: 1,
    title: "Pick Service",
    message: "Lorem Ipsum Dolor Sit amet. Marcus Aurelius oda miri met.",
    img: "pick-service",
  },
  {
    id: 2,
    title: "Hire Service",
    message: "Lorem Ipsum Dolor Sit amet. Marcus Aurelius oda miri met.",
    img: "hire-service",
  },
  {
    id: 3,
    title: "Copy Service",
    message: "Lorem Ipsum Dolor Sit amet. Marcus Aurelius oda miri met.",
    img: "copy-service",
  },
];

const Why = () => {
  return (
    <div className="why_wrapper">
      <h2>Why is korbu better?</h2>
      <p>
        The path of the righteous man is beset on all sides by the iniquities of
        the selfish and the tyranny of evil men. Blessed is he who, in the name.
      </p>
      <div className="why_icons">
        {optionsContent.map((item) => {
          return (
            <div className="why_item" key={item.id}>
              <div className="why_icon">
                <img src={`/static/icons/${item.img}.png`} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
