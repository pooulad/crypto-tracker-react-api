import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res) => {
      setData(res.data);
    }).catch(error => console.log(error));
  },[]);

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const filterData = data.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="app"> 
      <div className="search">
        <h1 className='search-text'>search a currency🔍</h1>
        <form>
          <input onChange={handleSearch} type="text" placeholder="Search here..." className="form-input" />
        </form>
      </div>
      <div className="refresh-button">
        <button onClick={refreshPage}>click to reload!</button>
      </div>
      <div className="coin-row-title">
          <div className="coin">
            <h1>Image/Name</h1>
            <p>Symbol</p>
          </div>
          <div className="coin-data">
            <div className="price">Price</div>
            <div className="volume">Volume</div>
            <p className="percent">Percent</p>
            <p className="marketcap">Market cap</p>
          </div>
        </div>
      {filterData.map(coin_data => {
        return(
          <Coin 
            key={coin_data.id} 
            name={coin_data.name} 
            price={coin_data.current_price} 
            marketcap={coin_data.market_cap} 
            image={coin_data.image} 
            symbol={coin_data.symbol} 
            priceChange={coin_data.price_change_percentage_24h} 
            volume={coin_data.total_volume} 
          />
        )
      })}
    </div>
  )
}

export default App
