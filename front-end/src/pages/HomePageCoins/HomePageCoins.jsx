import Chevron_right from "../../assets/Chevron_right.svg"
import "./HomePageCoins.css"
import { useSelector } from "react-redux"

const HomePageCoins = () => {
    const allCoins = useSelector((state) => state.homecoins.value);
    const filteredCoins = useSelector((state) => state.homecoins.filteredValue);
    const coins = filteredCoins.length > 0 ? filteredCoins : allCoins;

    return (
        <div className="coins-wrapper">
            {coins.map((coin) => {
                return (
                    <div key={coin.category_id} className="coin">
                        <h5 className="coin-header">{coin.name}</h5>
                        <a href={`/category/${coin.category_id}`} className="show-all">
                            <span>Show all</span>
                            <img src={Chevron_right} alt="Show all" />
                        </a>
                        <img className="coin-image" src={coin.img_category} alt={coin.name} />
                    </div>
                );
            })}
        </div>
    );
};

export default HomePageCoins;

