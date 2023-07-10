import React, { useState } from "react";
import FruitsList from "./FruitsList";
import CreateWindow from "./CreateWindow";

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

const HomePage: React.FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [isCreateWindowOpen, setIsCreateWindowOpen] = useState(false);

  const handleAddFruit = (fruit: Fruit) => {
    setFruits((prevFruits) => [...prevFruits, fruit]);
  };

  const handleToggleCreateWindow = () => {
    setIsCreateWindowOpen(!isCreateWindowOpen);
  };

  return (
    <div>
      {fruits.length === 0 && !isCreateWindowOpen ? (
        <div>
          <h2>Cadastre uma fruta</h2>
          <button onClick={handleToggleCreateWindow}>Add Fruit</button>
        </div>
      ) : (
        <>
          <FruitsList fruits={fruits} setFruits={setFruits}/>
          <button onClick={handleToggleCreateWindow} className="add-button">
            +
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
    </div>
  );
};

export default HomePage;
