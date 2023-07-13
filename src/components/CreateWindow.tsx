import React, { useState } from "react";
import "./styles/CreateWindow.css";

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

interface CreateWindowProps {
  onAddFruit: (fruit: Fruit) => void;
  onClose: () => void;
}

const CreateWindow: React.FC<CreateWindowProps> = ({ onAddFruit, onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(event.target.value));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddFruit = () => {
    const newFruit: Fruit = {
      name,
      price,
      quantity,
    };

    onAddFruit(newFruit);
  };

  return (
    <div className="create-window-overlay">
      <div className="create-window">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Create Fruit</h2>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Price per kilo:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </div>
        <button onClick={handleAddFruit}>Add Fruit</button>
      </div>
    </div>
  );
};

export default CreateWindow;
