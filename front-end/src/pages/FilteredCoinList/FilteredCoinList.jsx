import React from 'react';
import './FilteredCoinList.css';

const ListOfCoins = ({ filteredCoins }) => {
    return (
        <div className="coin-filter-list">
            {filteredCoins.length > 0 && (
                filteredCoins.map((coin) => (
                    <a key={coin.coins_id}  href={`/coin-details/${coin.coins_id}`}>
                        <div key={coin.coins_id} className="coin-item">
                        <img className='filter-coin-img' src={coin.img_obverse} />
                        <div className="filter-main-part">
                            <h6 className="filter-header">{coin.name}</h6>
                            <p className="filter-country">Country: {coin.country}</p>
                            <p className="filter-metal">Metal: {coin.compisition}</p>
                            <p className="filter-quality">Quality: {coin.quality}</p>
                            <p className="filter-price">Price: {coin.price}</p>
                            <p className="filter-year">Year: {coin.year}</p>
                        </div>
                    </div>
                    </a>
                ))
            )}
        </div>
    );
};

export default ListOfCoins;
