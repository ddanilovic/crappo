import React from "react";

const optionsContent = [
  {
    id: 1,
    title: "Trade",
    message: "Instant operations without centralized system.",
    img: "flash",
  },
  {
    id: 2,
    title: "Find",
    message:
      "Find goods, assets & sellers, automatically matched by CRAPPO via AI engine.",
    img: "rocket",
  },
  {
    id: 3,
    title: "Buy & Sell",
    message:
      "Buy and sell goods securely, basing on smart contract and blockchain technology.",
    img: "eth",
  },
];

const Why = () => {
  return (
    <div className="why_wrapper">
      <h2>Take full control of your crypto</h2>
      <p>
        Built on Arbitrum and Avalanche, our decentralized leverage trading
        exchange focuses on being the best execution environment for trades.
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
