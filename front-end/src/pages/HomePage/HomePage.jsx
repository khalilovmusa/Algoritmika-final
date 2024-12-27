import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useEffect, useState } from "react";
import HomePageCoins from "../HomePageCoins/HomePageCoins";
import './HomePage.css';
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import { useDispatch } from "react-redux";
import { setHomeCoins, setFilteredCoins } from "../../app/HomePageSlicer/HomePageSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const [toggleAdvanced, setToggleAdvanced] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setHomeCoins(data));
                dispatch(setFilteredCoins(data));
            });
    }, [dispatch]);

    const handleSearch = () => {
        dispatch(setFilteredCoins(searchTerm));
    };

    return (
        <div className="homepage-wrapper">
            <span>HomePage</span>
            <div className="homepage-input-wrapper" >
                <label className="input-label" htmlFor="home-search">Input field</label>
                <input 
                    className="search-input" 
                    name="home-search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className="advanced-wrapper">
                <a className="advanced" onClick={() => setToggleAdvanced(!toggleAdvanced)} href="#">
                    <span>Advanced Filter</span> 
                    {toggleAdvanced ? <img src={dropdown_icon_up} alt="Hide" /> : <img src={dropdown_icon_down} alt="Show" />}
                </a>
            </div>
            {toggleAdvanced ? <HomePageAdvanced /> : <HomePageCoins />}
        </div>
    );
};

export default HomePage;

