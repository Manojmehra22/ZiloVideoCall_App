import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div className="meet">
      <input
        className="inpt"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter Your Name..."
      />

      <button className="btn" onClick={submitHandler}>
        Join the Meeting
      </button>
    </div>
  );
};

export default HomePage;
