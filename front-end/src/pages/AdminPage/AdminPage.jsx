import "./AdminPage.css";
import exclusive_img from "../../assets/Exclusive_coin.png"

const AdminPage = () => {
    return (
        <div className="adminpage-wrapper">
            <span className="admin-panel-header">Admin Panel</span>
            <div className="adminpage-input-wrapper">
                <label className="admin-input-label" htmlFor="admin-search">Input field</label>
                <div className="admin-search-wrapper">
                    <input className="admin-search-input" name="admin-search" />
                    <button className="admin-search-button" >Search</button>
                </div>
            </div>




            <div className="admin-coins-wrapper">
                <div className="admin-coin">
                    <img className="admin-coin-img" src={exclusive_img} />
                    <div className="admin-coin-description">
                        <p className="admin-coin-header">Canadian Beaver</p>
                        <p className="admin-coin-short-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Culpa, excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Optio, perspiciatis.
                        </p>
                    </div>
                    <div className="admin-btn-wrapper">
                        <button className="admin-delete-btn">Delete</button>
                        <button className="admin-edit-btn">Edit</button>
                    </div>
                </div>

                <div className="admin-coin">
                    <img className="admin-coin-img" src={exclusive_img} />
                    <div className="admin-coin-description">
                        <p className="admin-coin-header">Canadian Beaver</p>
                        <p className="admin-coin-short-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Culpa, excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Optio, perspiciatis.
                        </p>
                    </div>
                    <div className="admin-btn-wrapper">
                        <button className="admin-delete-btn">Delete</button>
                        <button className="admin-edit-btn">Edit</button>
                    </div>
                </div>


            </div>
            { }
        </div>
    )
}

export default AdminPage;