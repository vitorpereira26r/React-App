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
    onClose(); // Fechar a janela após atualizar a fruta
  };

  return (
    <div className="edit-window-overlay">
      <div className="edit-window">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Editar Fruta</h2>
        <div className="form-group">
          <label htmlFor="name-input">Nome fruta:</label>
          <input
            id="name-input"
            placeholder="Nome Fruta"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-input">Preço do kilo:</label>
          <input
            id="price-input"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity-input">Quantidade em estoque:</label>
          <input
            id="quantity-input"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <button onClick={handleUpdateFruit}>Update Fruit</button>
      </div>
    </div>
  );
};

export default EditWindow;
