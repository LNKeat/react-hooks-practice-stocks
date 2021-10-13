import React, {useEffect} from "react";
import Stock from "./Stock";

function StockContainer({stocks, moveStock}) {
  let stocksToDisplay;
  stocksToDisplay= stocks.map(stock => <Stock key={stock.id} stock={stock} moveStock={moveStock} />)


  return (
    <>
      {stocksToDisplay}
    </>
  );
}

export default StockContainer;
