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

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
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
    }
  };

  const renderInput = (name, label, type = "text") => (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleInputChange}
        className={errors[name] ? "invalid" : ""}
      />
      {errors[name] && <p className="error-message">{errors[name]}</p>}
    </div>
  );

  return (
    <form className="admin-panel-coin-add-wrapper" onSubmit={handleSubmit}>
      <span className="admin-header">Admin Panel</span>
      <div>
        {renderInput("name", "Coin Name")}
        {renderInput("face_value", "Face Value")}
        {renderInput("year", "Year of Issue")}
        {renderInput("price", "Price")}
        {renderInput("country", "Country")}
        {renderInput("compisition", "Metal (Composition)")}
      </div>
      <div>
        <div className="input-group">
          <p className="add-short-description">Short Description</p>
          <textarea
            name="short_description"
            value={formData.short_description}
            onChange={handleInputChange}
            className={errors.short_description ? "invalid" : ""}
          />
          {errors.short_description && <p className="error-message">{errors.short_description}</p>}
        </div>
        <div className="input-group">
          <p className="add-long-description">Long Description</p>
          <textarea
            name="full_description"
            value={formData.full_description}
            onChange={handleInputChange}
            className={errors.full_description ? "invalid" : ""}
          />
          {errors.full_description && <p className="error-message">{errors.full_description}</p>}
        </div>
        <div className="input-group">
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            className={errors.category_id ? "invalid" : ""}
          >
            <option value="">Select a category</option>
            <option value="1">Bullion coin</option>
            <option value="2">Exclusive coins</option>
            <option value="3">Commemorative coins</option>
          </select>
          {errors.category_id && <p className="error-message">{errors.category_id}</p>}
        </div>
        {renderInput("quality", "Quality")}
        {renderInput("weight", "Weight")}
      </div>
      <div>
        <div>
          {renderInput("img_obverse", "Obverse Image Link")}
          {renderInput("img_reverse", "Reverse Image Link")}
        </div>
        <div>
          <button type="submit">Save</button>
          <a href="/admin">
            <button type="button">Cancel</button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default AdminCoinAdd;

