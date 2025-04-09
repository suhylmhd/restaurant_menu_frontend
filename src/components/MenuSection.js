import React from "react";
import cocktailIcon from "../assets/cocktail-icon.png";
import drinkGlass from "../assets/drink-glass.png";
import "./MenuSection.css";

const MenuSection = ({ menus }) => {
  return (
    <div>
      {menus.map((menu, index) => (
        <section key={index} className="menu-section">
          <div className="menu-box">
            {/* Top-left icon and badge */}
            <div className="menu-box-decorator">
              <img src={cocktailIcon} alt="icon" className="cocktail-icon" />
            </div>

            {/* Title */}
            <div className="menu-title-line">
              <div className="line" />
              <h2>{menu.name.toUpperCase()}</h2>
              <div className="line" />
            </div>

            {/* Menu Items */}
            <div className="menu-items">
              {menu.items && menu.items.length > 0 ? (
                menu.items.map((item, i) => (
                  <div className="menu-item" key={i}>
                    <h3>
                      {item.name}
                      <span>${parseFloat(item.price).toFixed(2)}</span>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))
              ) : (
                <p style={{ paddingLeft: "1rem", fontStyle: "italic" }}>No items yet.</p>
              )}
            </div>

            {/* Bottom-right drink image */}
            <div className="menu-box-image">
              <img src={drinkGlass} alt="drink" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuSection;
