import "./HomePageAdvanced.css"

const HomePageAdvanced = () => {
    return (
        <div className="homepage-advanced-wrapper">
            <div className="option-part">
                <label htmlFor="country-select">Issuing country</label>
                <select name="country-select select">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                </select>
                <label>Metal</label>
                <select name="metal-select select">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                </select>
                <label>Quality of the coin</label>
                <select name="quality-select select">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                </select>
            </div>
            <div className="price-issue-details">
                <div className="price-wrapper">
                    <p>Price</p>
                    <label>
                        From
                        <input className="" />
                    </label>
                    <label htmlFor="">
                        To
                        <input />
                    </label>
                </div>
                <div className="issue-wrapper">
                    <p>Year of issue</p>
                    <label>
                        From
                        <input />
                    </label>
                    <label htmlFor="">
                        To
                        <input />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default HomePageAdvanced;