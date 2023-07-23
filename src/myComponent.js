import React, { useState, useEffect } from "react";
import axios from "axios"

const MyComponent = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log(`Likes count: ${likes}`);
    document.body.className = likes % 2 === 0 ? "bg--0" : "bg--1";
  }, [likes]);

  const handleIncrement = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={handleIncrement}>Like</button>
    </div>
  );
};

export default MyComponent;