import { useSelector } from "react-redux";
import "./ListOfCoins.css";

const ListOfCoins = () => {
    const data = useSelector((state) => state.categoryslice.value);

    if (!data || data.length === 0) {
        return <p className="coinlist-no-data">No coins available to display.</p>;
    }

    return (
        <div className="coinlist-coins-wrapper">
            {data.map((coin) => (
                <a className="coin-details-anchor" key={coin.coins_id} href={`/coin-details/${coin.coins_id}`}>
                    <div className="coinlist-coin" key={coin.coins_id}>
                    <img
                        src={coin.img_obverse}
                        alt={`${coin.name} image`}
                    />
                    <div className="coinlist-coin-description-wrapper">
                        <p className="coinlist-desc-header">
                            {coin.name}
                        </p>
                        <p className="coinlist-short-description">
                            {coin.short_description}
                        </p>
                    </div>
                </div>
                </a>
            ))}
        </div>
    );
};

export default ListOfCoins;
