import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, moveStock}) {
 
  return (
    <>
      {myStocks.map(stock => <Stock key={stock.id} stock={stock} moveStock={moveStock} />)}
    </>
  );
}

export default PortfolioContainer;
