import bullion_coin from "../../assets/Bullion_coin.svg"
import exclusive_coin from "../../assets/Exclusive_coin.svg"
import commemorative_coin from "../../assets/Commemorative_coin.svg"
import Chevron_right from "../../assets/Chevron_right.svg"
import "./HomePageCoins.css"

const HomePageCoins = () => {
    return (
        <div className="coins-wrapper">
            <div className="coin">
                <h5>Bullion coins</h5>
                <a href="#" className="show-all"><span>Show all</span><img src={Chevron_right}/></a>
                <img className="coin-image" src={bullion_coin} />
            </div>
            <div className="coin">
                <h5>Exclusive coins</h5>
                <a href="#" className="show-all"><span>Show all</span><img src={Chevron_right}/></a>
                <img className="coin-image" src={exclusive_coin} />
            </div>
            <div className="coin">
                <h5>Commemorative coins</h5>
                <a href="#" className="show-all"><span>Show all</span><img src={Chevron_right}/></a>
                <img className="coin-image" src={commemorative_coin} />
            </div>
        </div>
    )
}

export default HomePageCoins;

