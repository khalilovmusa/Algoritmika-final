import exclusive_img from "../../assets/Exclusive_coin.png";
import "./ListOfCoins.css";

const ListOfCoins = () => {

    return (
            <div className="coinlist-coins-wrapper">
                <div className="coinlist-coin">
                    <img src={exclusive_img} />
                    <div className="coinlist-coin-description-wrapper">
                        <p className="coinlist-desc-header">
                            Canadian Beaver
                        </p>
                        <p className="coinlist-short-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Distinctio eum ipsa illo quis repellendus nostrum corrupti ex laborum in voluptatem!
                        </p>
                    </div>
                </div>

            </div>
    )
}

export default ListOfCoins;