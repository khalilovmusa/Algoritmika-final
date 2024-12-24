import { useState } from "react";
import exclusive_img from "../../assets/Exclusive_coin.png";
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import HomePageCoins from "../HomePageCoins/HomePageCoins";
import "./ListOfCoins.css";
import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";

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