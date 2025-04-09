// src/pages/Reservation.js
import React, { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    alert("Reservation submitted successfully!");
    // You can send this data to your backend here
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <input name="guests" type="number" min="1" placeholder="Number of Guests" onChange={handleChange} value={formData.guests} required />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
