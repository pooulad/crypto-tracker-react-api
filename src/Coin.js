import React from 'react'
import "./Coin.css"

const Coin = ({image, name, symbol, price, volume,priceChange,marketcap}) => {
    return (
        <div className="container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <div className="price">${price}</div>
                    <div className="volume">${volume.toLocaleString()}</div>
                    {priceChange < 0 ? (
                    <p className="percent red">{priceChange.toFixed(2)}%</p> 
                    ) : (
                    <p className="percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="marketcap">
                        Market cap : ${marketcap.toLocaleString()} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
