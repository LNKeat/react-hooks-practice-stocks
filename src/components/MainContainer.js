import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [viewCards, setViewCards] = useState({
    stocks:true,
    portfolio:true
  })

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(stocksData =>{
      const updateStocksData = stocksData.map(stock => {
        return {...stock, myStock:false}
      })
      setStocks(updateStocksData)
    })
  }, [])

  function moveStock(e, selectedStock){
    if(selectedStock.myStock === false){
      const updatedAdd = {...selectedStock, myStock:true}
      const updatedMyStocks = [...myStocks, updatedAdd]
      const updatedStocks = stocks.map(stock => stock.id === selectedStock.id ? updatedAdd : stock)
      setMyStocks(updatedMyStocks)
      setStocks(updatedStocks)
    }else{
      const updatedAdd = {...selectedStock, myStock:false}
      const updatedMyStocks = myStocks.filter(stock =>  stock.id !== selectedStock.id)
      const updatedStocks = stocks.map(stock => stock.id === selectedStock.id ? updatedAdd : stock)
      setMyStocks(updatedMyStocks)
      setStocks(updatedStocks)
    }
  }
  
  function handleView(e){
    const newKey = e.target.id
    const newValue = !viewCards[newKey]
    const newView = {...viewCards, [e.target.id]:newValue }
    setViewCards(newView)
  }

  function handleSort(sortBy){
    console.log(sortBy)
    let sortedStocks;
    if(sortBy === 'price'){
      sortedStocks = stocks.sort(function (a, b) {
        return b.price - a.price;
      })
    }else{
      sortedStocks = stocks.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    }
    console.log('sorted: ', sortedStocks)
    setStocks(sortedStocks)
  }
  

  return (
    <div className="main-container">
      <SearchBar handleSort={handleSort} />
      <div className="all-stocks">
        <div className="stock-container">
        <h2 id='stocks' onClick={(e)=>handleView(e)}>Stocks</h2>
          {viewCards.stocks ? <StockContainer stocks={stocks} moveStock={moveStock} /> : null}
        </div>
        <div className="portfolio-container">
        <h2 id='portfolio' onClick={(e)=>handleView(e)}>My Portfolio</h2>
        {viewCards.portfolio ? <PortfolioContainer myStocks={myStocks} moveStock={moveStock} /> : null}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
