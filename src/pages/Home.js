import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import './Home.css';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import MenuForm from '../components/MenuForm';
import MenuItemForm from '../components/MenuItemForm';
import api from '../api';

const Home = () => {
  const [menus, setMenus] = useState([]);

  // Fetch menus on load
  useEffect(() => {
    api.get('/menus')
      .then(res => setMenus(res.data))
      .catch(err => console.error('Error fetching menus:', err));
  }, []);

  const handleAddMenu = async (menu) => {
    try {
      const res = await api.post('/menus', menu);
      const newMenu = res.data;
      setMenus([...menus, newMenu]);
      return newMenu; // 👈 Return the new menu so we can use it in MenuForm
    } catch (error) {
      console.error('Error adding menu:', error);
      return null;
    }
  };

  const handleAddItem = async (menuId, item) => {
    try {
      const res = await api.post(`/menus/${menuId}/items`, item);
      const updatedMenus = menus.map((menu) =>
        menu._id === menuId ? res.data : menu
      );
      setMenus(updatedMenus);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="home">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MenuSection menus={menus} />} />
          <Route path="/add-menu" element={<MenuForm onAddMenu={handleAddMenu} />} />
          <Route path="/add-item" element={<MenuItemForm onAddItem={handleAddItem} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default Home;
