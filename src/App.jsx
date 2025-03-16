import React, { useState } from "react";
import alpacaImage from "./assets/alpaca.jpg";
import llamaImage from "./assets/llama.jpg";
import lionImage from "./assets/lion.jpg";
import tigerImage from "./assets/tiger.jpg";
import "./styles.css";

function App() {
  const [images, setImages] = useState([llamaImage]);

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const duplicateImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <div className="app">
      <h1>Choose Your Animal</h1>

      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image} alt="Animal" />
            <div className="button-group">
              <button className="text-button" onClick={() => duplicateImage(image)}>Duplicate</button>
              <button className="text-button" onClick={() => deleteImage(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        {[alpacaImage, llamaImage, lionImage, tigerImage].map((animal, index) => (
          <button key={index} className="add-animal" onClick={() => setImages([...images, animal])}>
            {["Alpaca", "Llama", "Lion", "Tiger"][index]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

   


