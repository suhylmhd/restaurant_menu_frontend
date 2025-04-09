// src/components/MenuForm.js
import React, { useState, useEffect } from "react";
import "./MenuForm.css";
import { Link } from "react-router-dom";
import api from "../api";

const MenuForm = ({ onAddMenu }) => {
  const [menuName, setMenuName] = useState("");
  const [description, setDescription] = useState("");
  const [menus, setMenus] = useState([]);

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
    if (!menuName) return;

    try {
      const res = await api.post("/menus", {
        name: menuName,
        description,
      });
      onAddMenu(res.data);
      setMenuName("");
      setDescription("");
      fetchMenus(); // refresh menus
    } catch (err) {
      console.error("Error adding menu:", err);
    }
  };

  return (
    <>
      <form className="menu-form" onSubmit={handleSubmit}>
        <h3>Add New Menu</h3>
        <input
          type="text"
          placeholder="Menu Name"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Menu</button>
      </form>

      <div className="add-item-btn-container">
        <Link to="/add-item">
          <button className="add-item-btn">Add Menu Item</button>
        </Link>
      </div>
    </>
  );
};

export default MenuForm;
