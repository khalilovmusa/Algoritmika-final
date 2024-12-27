import React, { useState } from "react";
import "./AdminCoinAdd.css";

const AdminCoinAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    face_value: "",
    year: "",
    price: "",
    country: "",
    compisition: "",
    short_description: "",
    full_description: "",
    quality: "",
    weight: "",
    img_obverse: "",
    img_reverse: "",
    category_id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Coin added successfully:", result);
        alert("Coin added successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error adding coin:", errorData);
        alert("Failed to add the coin: " + errorData.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred while adding the coin.");
    }
  };

  return (
    <form
      className="admin-panel-coin-add-wrapper"
      onSubmit={handleSubmit}
    >
      <span className="admin-header">Admin Panel</span>
      <div>
        <label htmlFor="name">Coin Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="face_value">Face Value</label>
        <input
          name="face_value"
          type="text"
          value={formData.face_value}
          onChange={handleInputChange}
        />
        <label htmlFor="year">Year of Issue</label>
        <input
          name="year"
          type="text"
          value={formData.year}
          onChange={handleInputChange}
        />
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="text"
          value={formData.price}
          onChange={handleInputChange}
        />
        <label htmlFor="country">Country</label>
        <input
          name="country"
          type="text"
          value={formData.country}
          onChange={handleInputChange}
        />
        <label htmlFor="compisition">Metal (Composition)</label>
        <input
          name="compisition"
          type="text"
          value={formData.compisition}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p className="add-short-description">Short Description</p>
        <textarea
          name="short_description"
          value={formData.short_description}
          onChange={handleInputChange}
        />
        <p className="add-long-description">Long Description</p>
        <textarea
          name="full_description"
          value={formData.full_description}
          onChange={handleInputChange}
        />
        <select
          name="category_id"
          value={formData.category_id}
          onChange={handleInputChange}
        >
          <option value="">Select a category</option>
          <option value="1">Bullion coin</option>
          <option value="2">Exclusive coins</option>
          <option value="3">Commemorative coins</option>
        </select>
        <label htmlFor="quality">Quality</label>
        <input
          name="quality"
          type="text"
          value={formData.quality}
          onChange={handleInputChange}
        />
        <label htmlFor="weight">Weight</label>
        <input
          name="weight"
          type="text"
          value={formData.weight}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="img_obverse">Obverse Image Link</label>
          <input
            name="img_obverse"
            type="text"
            value={formData.img_obverse}
            onChange={handleInputChange}
          />
          <label htmlFor="img_reverse">Reverse Image Link</label>
          <input
            name="img_reverse"
            type="text"
            value={formData.img_reverse}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <a href="/admin">
            <button type="button">
              Cancel
            </button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default AdminCoinAdd;
