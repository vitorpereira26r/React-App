import React, { useState } from "react";
import "./styles/CreateEditWindow.css";

interface Fruit {
  name: string;
  price: number; // Alterado para ser opcional
  quantity: number; // Alterado para ser opcional
}

interface CreateWindowProps {
  onAddFruit: (fruit: Fruit) => void;
  onClose: () => void;
}

const CreateWindow: React.FC<CreateWindowProps> = ({ onAddFruit, onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0.0); // Inicializado como undefined
  const [quantity, setQuantity] = useState<number>(0); // Inicializado como undefined

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
        <h2>Cadastrar Fruta</h2>
        <div>
          <input placeholder="Nome da fruta" type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <input placeholder="Preço do kilo" type="number" value={price || ""} onChange={handlePriceChange} />
        </div>
        <div>
          <input placeholder="Quantidade em estoque" type="number" value={quantity || ""} onChange={handleQuantityChange} />
        </div>
        <button onClick={handleAddFruit}>Add Fruit</button>
      </div>
    </div>
  );
};

export default CreateWindow;
