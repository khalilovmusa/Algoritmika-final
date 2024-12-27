import { useEffect, useState } from "react";
import "./HomePageAdvanced.css"
import ListOfCoins from "../FilteredCoinList/FilteredCoinList";

const HomePageAdvanced = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [country, setCountry] = useState("");
    const [metal, setMetal] = useState("");
    const [quality, setQuality] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/advanced-filter').then((res) => {
            if(!res.ok){
                console.log("An error occurred while fetching");
                return;
            }
            return res.json();
        }).then((data) => {setCoinsData(data)});
    }, []);

    const handleFilter = () => {
        const filteredCoins = coinsData.filter(coin => {
            return (
                (!country || coin.country === country) &&
                (!metal || coin.compisition === metal) &&
                (!quality || coin.quality === quality) &&
                (!priceFrom || coin.price >= parseFloat(priceFrom)) &&
                (!priceTo || coin.price <= parseFloat(priceTo)) &&
                (!yearFrom || coin.year >= parseInt(yearFrom)) &&
                (!yearTo || coin.year <= parseInt(yearTo))
            );
        });

        setFilteredCoins(filteredCoins);
    };

    return (
        <div className="homepage-advanced-wrapper">
            <div className="option-part">
                <label htmlFor="country-select">Issuing country</label>
                <select 
                    name="country-select" 
                    className="select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select country</option>
                    {coinsData.map((coin, index) => (
                        <option key={index} value={coin.country}>{coin.country}</option>
                    ))}
                </select>
                <label>Metal</label>
                <select 
                    name="metal-select" 
                    className="select"
                    value={metal}
                    onChange={(e) => setMetal(e.target.value)}
                >
                    <option value="">Select metal</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="nickel">Nickel</option>
                    <option value="copper">Copper</option>
                </select>
                <label>Quality of the coin</label>
                <select 
                    name="quality-select" 
                    className="select"
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                >
                    <option value="">Select quality</option>
                    <option value="Proof">Proof</option>
                    <option value="BU">BU (Brilliant Uncirculated)</option>
                    <option value="UNC">UNC (Uncirculated)</option>
                </select>
                <ListOfCoins filteredCoins={filteredCoins} />
            </div>
            <div className="price-issue-details">
                <div className="price-wrapper">
                    <p>Price</p>
                    <label>
                        From
                        <input 
                            type="number" 
                            className="from-input" 
                            value={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                        />
                    </label>
                    <label>
                        To
                        <input 
                            type="number" 
                            className="to-input" 
                            value={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                        />
                    </label>
                </div>
                <div className="issue-wrapper">
                    <p>Year of issue</p>
                    <label>
                        From
                        <input 
                            type="number" 
                            className="from-input" 
                            value={yearFrom}
                            onChange={(e) => setYearFrom(e.target.value)}
                        />
                    </label>
                    <label>
                        To
                        <input 
                            type="number" 
                            className="to-input" 
                            value={yearTo}
                            onChange={(e) => setYearTo(e.target.value)}
                        />
                    </label>
                </div>
                <div className="apply-filter-wrapper">
                <button className="filter-button" onClick={handleFilter}>Apply Filters</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageAdvanced;
