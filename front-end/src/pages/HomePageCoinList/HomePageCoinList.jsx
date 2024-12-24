import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useState } from "react";
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import "./HomePageCoinList.css";
import ListOfCoins from "../ListOfCoins/ListOfCoins";


const HomePageCoinList = () => {
    const [toggleAdvanced, setToggleAdvanced] = useState(false);

    return (
        <div className="coinlist-wrapper">
            <span className="coinlist-panel-header">List of the coins</span>
            <a className="homepage-coinlist" href="#"><span className="homepage-underline">Homepage</span> — List of the coins</a>
            <div className="coinlist-input-wrapper">
                <label className="coinlist-input-label" htmlFor="coinlist-search">Input field</label>
                <div className="coinlist-search-wrapper">
                    <input className="coinlist-search-input" name="coinlist-search" />
                    <button className="coinlist-search-button" >Search</button>
                </div>
            </div>
            <a className="advanced" onClick={() => setToggleAdvanced(!toggleAdvanced)} href="#"><span>Advanced Filter</span> {toggleAdvanced ? <img src={dropdown_icon_up} /> : <img src={dropdown_icon_down} />}</a>
            {toggleAdvanced ? <HomePageAdvanced /> : <ListOfCoins />}
        </div>
    )
}

export default HomePageCoinList;