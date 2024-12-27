import dropdown_icon_down from "../../assets/dropdown_icon.svg";
import dropdown_icon_up from "../../assets/dropdown_icon_up.svg";
import { useEffect, useState } from "react";
import HomePageAdvanced from "../HomePageAdvanced/HomePageAdvanced";
import "./HomePageCoinList.css";
import ListOfCoins from "../ListOfCoins/ListOfCoins";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../app/CategoriesSlice/CategoriesSlice";

const HomePageCoinList = () => {
    const [toggleAdvanced, setToggleAdvanced] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [originalCategory, setOriginalCategory] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categoryslice.value);

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${id}`).then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(setCategory(data));
            setOriginalCategory(data); // Store the original data
        });
    }, [id, dispatch]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const filteredCategory = originalCategory.filter((coin) => 
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch(setCategory(filteredCategory));
    };

    return (
        <div className="coinlist-wrapper">
            <span className="coinlist-panel-header">List of the coins</span>
            <a className="homepage-coinlist" href="/"><span className="homepage-underline">Homepage</span> — List of the coins</a>
            <div className="coinlist-input-wrapper">
                <label className="coinlist-input-label" htmlFor="coinlist-search">Input field</label>
                <div className="coinlist-search-wrapper">
                    <input 
                        className="coinlist-search-input" 
                        name="coinlist-search" 
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button className="coinlist-search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <a className="advanced" onClick={() => setToggleAdvanced(!toggleAdvanced)} href="#"><span>Advanced Filter</span> {toggleAdvanced ? <img src={dropdown_icon_up} /> : <img src={dropdown_icon_down} />}</a>
            {toggleAdvanced ? <HomePageAdvanced /> : <ListOfCoins />}
        </div>
    );
};

export default HomePageCoinList;
