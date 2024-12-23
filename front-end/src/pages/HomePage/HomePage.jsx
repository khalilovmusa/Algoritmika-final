
import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useEffect, useState } from "react";
import HomePageCoins from "../HomePageCoins/HomePageCoins";
import './HomePage.css';
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";


const HomePage = () => {

    const [toggleAdvanced, setToggleAdvanced] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/').then((res) => {return res.json()}).then((data) => console.log(data))
    })

    return (
        <div className="homepage-wrapper">
            HomePage
            <div className="homepage-input-wrapper">
                <label className="input-label" htmlFor="home-search">Input field</label>
                <input className="search-input" name="home-search" />
                <button className="search-button" >Search</button>
            </div>
            <a className="advanced" onClick={() => setToggleAdvanced(!toggleAdvanced)} href="#"><span>Advanced Filter</span> {toggleAdvanced ? <img src={dropdown_icon_up} /> : <img src={dropdown_icon_down} />}</a>
            {toggleAdvanced ? <HomePageAdvanced /> : <HomePageCoins />}
        </div>
    )
}

export default HomePage;