import React, { useState } from "react";
import "./styles/EditWindow.css";

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

interface EditWindowProps {
  fruit: Fruit;
  onUpdateFruit: (fruit: Fruit) => void;
  onClose: () => void;
}

const EditWindow: React.FC<EditWindowProps> = ({ fruit, onUpdateFruit, onClose }) => {
  const [name, setName] = useState(fruit.name);
  const [price, setPrice] = useState(fruit.price.toString());
  const [quantity, setQuantity] = useState(fruit.quantity.toString());

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleUpdateFruit = () => {
    const updatedFruit: Fruit = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    onUpdateFruit(updatedFruit);
  };

  return (
    <div className="edit-window-overlay">
      <div className="edit-window">
        <button className="close-button" onClick={onClose}>
            X
          </button>
        <h2>Edit Fruit</h2>
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
        <button onClick={handleUpdateFruit}>Update Fruit</button>
      </div>
    </div>
  );
};

export default EditWindow;
