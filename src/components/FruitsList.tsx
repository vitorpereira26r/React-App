import React, { useState, useEffect } from 'react';
import EditDeleteWindow from './EditDeleteWindow';
import SearchBar from './SearchBar';
import "./styles/FruitsList.css"

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

interface FruitsListProps {
  fruits: Fruit[];
  setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
}

const FruitsList: React.FC<FruitsListProps> = ({ fruits, setFruits }) => {
  const [fruitsList, setFruitsList] = useState<Fruit[]>(fruits);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditDeleteWindow, setShowEditDeleteWindow] = useState(false);
  const [selectedFruitIndex, setSelectedFruitIndex] = useState<number | null>(null);

  useEffect(() => {
    setFruitsList(fruits);
  }, [fruits]);

  const handleUpdateFruit = (updatedFruit: Fruit) => {
    if (selectedFruitIndex !== null) {
      const updatedFruits = fruitsList.map((fruit, index) => {
        if (index === selectedFruitIndex) {
          return updatedFruit;
        }
        return fruit;
      });
      setFruitsList(updatedFruits);
      setFruits(updatedFruits);
    }
  };

  const handleDelete = () => {
    if (selectedFruitIndex !== null) {
      const updatedFruits = fruitsList.filter((_, index) => index !== selectedFruitIndex);
      setFruitsList(updatedFruits);
      setFruits(updatedFruits);
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClose = () => {
    setSelectedFruitIndex(null);
    setShowEditDeleteWindow(false);
  };

  const handleActionsClick = (index: number) => {
    setSelectedFruitIndex(index);
    setShowEditDeleteWindow(true);
  };

  const handleCancelEditDelete = () => {
    setSelectedFruitIndex(null);
    setShowEditDeleteWindow(false);
  };

  const filteredFruits = fruitsList.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fruits-list">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredFruits.map((fruit, index) => {
          const formattedPrice = fruit.price.toFixed(2); 
          return (
            <li key={index}>
              <h2>{fruit.name}</h2>
              <div className='p'>
                <p className='price'>R$ {formattedPrice}</p>
                <p>{fruit.quantity} em estoque</p>
              </div>
              <div>
                <button onClick={() => handleActionsClick(index)}><span className='gear-icon'>&#9881;</span></button>
              </div>
            </li>
          );
        })}
      </ul>
      {showEditDeleteWindow && selectedFruitIndex !== null && (
        <EditDeleteWindow
          fruit={fruitsList[selectedFruitIndex]}
          onUpdateFruit={handleUpdateFruit}
          onDelete={handleDelete}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default FruitsList;
