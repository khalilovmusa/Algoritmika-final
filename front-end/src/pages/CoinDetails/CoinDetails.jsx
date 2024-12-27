import { useParams } from 'react-router'
import './CoinDetails.css'
import { useEffect, useState } from 'react';

const  CoinDetails = () => {
    const id = useParams();
    const [coin, setCoin] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/coin-details/${id.id}`).then((res) => {
            if(!res.ok){
                console.log("Response is not ok!");
            }
            return res.json();
        }).then((coin) => {
            setCoin(coin[0]);
        })
    },[id])
  return (
    <div className="coin-details">
      <div className="coin-images">
        <img 
          src={coin.img_obverse}
          alt="Coin Front" 
          width={300} 
          height={300}
        />
        <img 
          src={coin.img_reverse}
          alt="Coin Back" 
          width={300} 
          height={300}
        />
      </div>
      <div className="coin-info">
        <h1>{coin.name}</h1>
        <p>{coin.short_description}</p>
        <p>{coin.full_description}</p>
        <table>
          <tbody>
            <tr><td>Issuing Country</td><td>{coin.country}</td></tr>
            <tr><td>Composition</td><td>{coin.compisition}</td></tr>
            <tr><td>Quality</td><td>{coin.quality}</td></tr>
            <tr><td>Denomination</td><td>{coin.price} cents</td></tr>
            <tr><td>Year</td><td>{coin.year}</td></tr>
            <tr><td>Weight</td><td>{coin.weight}</td></tr>
            <tr><td>Price</td><td>{coin.price}$</td></tr>
          </tbody>
        </table>
        <a href="/">Back to the list</a>
      </div>
    </div>
  )
}

export default CoinDetails;