import { useState } from "react";

// Import your images
import alpacaImage from "./assets/alpaca.jpg";
import llamaImage from "./assets/llama.jpg";
import lionImage from "./assets/lion.jpg";
import tigerImage from "./assets/tiger.jpg";

function App() {
  const [image, setImage] = useState(llamaImage); // Default to Llama

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Choose Your Animal</h1>
      <img src={image} alt="Animal" className="w-64 h-64 object-cover mb-4" />
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setImage(alpacaImage)}
        >
          Alpaca
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setImage(llamaImage)}
        >
          Llama
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => setImage(lionImage)}
        >
          Lion
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => setImage(tigerImage)}
        >
          Tiger
        </button>
      </div>
    </div>
  );
}

export default App;

