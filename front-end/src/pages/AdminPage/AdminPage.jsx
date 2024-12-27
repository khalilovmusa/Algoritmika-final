import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import AdminCoinEdit from "../AdminCoinEdit/AdminCoinEdit";

const AdminPage = () => {
    const [coins, setCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [editingCoin, setEditingCoin] = useState(null); // State for the coin being edited

    useEffect(() => {
        fetch('http://localhost:3000/api/admin/dashboard')
            .then(res => res.json())
            .then(data => {
                setCoins(data);
                setFilteredCoins(data);
            });
    }, []);

    const handleCoinDelete = (coin) => {
        const deleteId = +coin.coins_id;

        fetch(`http://localhost:3000/api/admin/delete/${deleteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to delete the coin");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Coin deleted successfully:", data);
                fetch('http://localhost:3000/api/admin/dashboard')
                    .then(res => res.json())
                    .then(data => {
                        setCoins(data);
                        setFilteredCoins(data);
                    });
            })
            .catch((error) => {
                console.error("Error deleting coin:", error);
                alert("Failed to delete the coin: " + error.message);
            });
    };

    const handleCoinEdit = (coin) => {
        setEditingCoin(coin); // Set the coin to be edited
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLogOut = () => {
        localStorage.removeItem("isAuth")
    }

    const handleSearch = () => {
        const filtered = coins.filter(coin =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCoins(filtered);
    };

    return (
        <div className="adminpage-wrapper">
            {editingCoin ? (
                <AdminCoinEdit coin={editingCoin} />
            ) : (
                <>
                    <div className="admin-panel-header">
                        <span className="admin-panel-header" >Admin Panel</span>
                        <button className="admin-logout" onClick={() => { handleLogOut() }}><a href="/login">Logout</a></button>
                    </div>
                    <div className="adminpage-input-wrapper">
                        <label className="admin-input-label" htmlFor="admin-search">Input field</label>
                        <div className="admin-search-wrapper">
                            <input
                                className="admin-search-input"
                                name="admin-search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button className="admin-search-button" onClick={handleSearch}>Search</button>
                        </div>
                    </div>

                    <div className="admin-coins-wrapper">
                        {filteredCoins.length > 0 ? (
                            filteredCoins.map((coin, index) => (
                                <div className="admin-coin" key={coin.id || index}>
                                    <img className="admin-coin-img" src={coin.img_obverse} alt={coin.name} />
                                    <div className="admin-coin-description">
                                        <p className="admin-coin-header">{coin.name}</p>
                                        <p className="admin-coin-short-desc">{coin.short_description}</p>
                                    </div>
                                    <div className="admin-btn-wrapper">
                                        <button className="admin-delete-btn" onClick={() => handleCoinDelete(coin)}>Delete</button>
                                        <button className="admin-edit-btn" onClick={() => handleCoinEdit(coin)}>Edit</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-coins-error">No coins found</div>
                        )}

                        <div className="admin-add-coin-wrapper">
                            <a href="/coin-add" className="admin-add-coin-anchor">
                                <div className="admin-add-coin-circle">+</div>
                                <p className="admin-add-coin-text">Add a new coin</p>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPage;
