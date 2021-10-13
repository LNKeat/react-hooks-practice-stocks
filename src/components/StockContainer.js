import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, moveStock}) {
  return (
    <>
      {stocks.map(stock => <Stock key={stock.id} stock={stock} moveStock={moveStock} />)}
    </>
  );
}

export default StockContainer;
