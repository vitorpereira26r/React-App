import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FruitsList from "./FruitsList";
import CreateWindow from "./CreateWindow";
import ConfirmFruit from "./ConfirmFruit";
import './styles/HomePage.css'

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

const HomePage: React.FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [isCreateWindowOpen, setIsCreateWindowOpen] = useState(false);
  const [showConfirmFruit, setShowConfirmFruit] = useState(false);

  const handleAddFruit = (fruit: Fruit) => {
    setFruits((prevFruits) => [...prevFruits, fruit]);
    setShowConfirmFruit(true);
  };

  const handleToggleCreateWindow = () => {
    setIsCreateWindowOpen(!isCreateWindowOpen);
  };

  const handleConfirmClose = () => {
    setShowConfirmFruit(false);
  };

  return (
    <div className="home-page">
      {fruits.length === 0 && !isCreateWindowOpen ? (
        <div>
          <h2>Cadastre sua primeira fruta</h2>
          <button onClick={handleToggleCreateWindow} className="add-fruit-button"> &#43; Cadastre uma fruta</button>
        </div>
      ) : (
        <>
          <FruitsList fruits={fruits} setFruits={setFruits}/>
          <button onClick={handleToggleCreateWindow} className="add-button">
            &#43;
          </button>
        </>
      )}
      {isCreateWindowOpen && (
        <CreateWindow
          onAddFruit={(fruit) => {
            handleAddFruit(fruit);
            handleToggleCreateWindow();
          }}
          onClose={handleToggleCreateWindow}
        />
      )}
      {showConfirmFruit && (
        <ConfirmFruit onClose={handleConfirmClose} />
      )}
    </div>
  );
};

export default HomePage;
