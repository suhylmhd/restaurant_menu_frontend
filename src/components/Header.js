import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "./Header.css";
import api from "../api";

const Header = () => {
  const [menus, setMenus] = useState([]);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [items, setItems] = useState([]);

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

  const handleTabClick = (menuId) => {
    setActiveMenuId(menuId);
    const selectedMenu = menus.find((menu) => menu._id === menuId);
    setItems(selectedMenu?.items || []);
  };

  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span><b>DEEP</b> NET<br />SOFT</span>
        </div>
        <nav className="menu">
          <a href="/">HOME</a>
          <a href="/add-menu">MENU</a>
          <a href="/reservation">MAKE A RESERVATION</a>
          <a 
            onClick={(e) => {
            e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }} >
              CONTACT US
          </a>
        </nav>
      </div>

      <div className="header-content">
        <h1>MENU</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you’d like to place an order, use the “Order Online” button located
          below the menu.
        </p>

        <div className="tabs">
          {menus.map((menu) => (
            <button
              key={menu._id}
              className={activeMenuId === menu._id ? "active" : ""}
              onClick={() => handleTabClick(menu._id)}
            >
              {menu.name.toUpperCase()}
            </button>
          ))}
        </div>

        {activeMenuId && (
          <div className="menu-items">
            {items.length > 0 ? (
              items.map((item) => (
                <div className="menu-item" key={item._id}>
                  <h3>
                    {item.name} <span>${item.price}</span>
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <p style={{ marginTop: "20px" }}>No items in this menu yet.</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
