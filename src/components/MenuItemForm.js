// src/components/MenuItemForm.js
import React, { useState, useEffect } from "react";
import "./MenuForm.css";
import api from "../api";
import { useNavigate } from "react-router-dom";

const MenuItemForm = () => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const fetchMenus = async () => {
    try {
      const res = await api.get("/menus");
      setMenus(res.data);
    } catch (err) {
      console.error("Failed to fetch menus:", err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !selectedMenuId) return;

    try {
      await api.post(`/menus/${selectedMenuId}/items`, {
        name,
        description: desc,
        price,
      });
      setName("");
      setDesc("");
      setPrice("");
      navigate("/"); // redirect to MenuSection after adding
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <h3>Add Menu Item</h3>
      <select
        value={selectedMenuId}
        onChange={(e) => setSelectedMenuId(e.target.value)}
        required
      >
        <option value="">Select Menu</option>
        {menus.map((menu) => (
          <option key={menu._id} value={menu._id}>
            {menu.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default MenuItemForm;
