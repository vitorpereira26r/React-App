import React, { useState, useEffect } from 'react';
import EditWindow from './EditWindow';
import SearchBar from './SearchBar';
import './FruitsList.css';

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
  const [editFruitIndex, setEditFruitIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFruitsList(fruits);
  }, [fruits]);

  const handleDelete = (index: number) => {
    const updatedFruits = fruitsList.filter((_, i) => i !== index);
    setFruitsList(updatedFruits);
    setFruits(updatedFruits);
  };

  const handleEdit = (index: number) => {
    setEditFruitIndex(index);
  };

  const handleUpdateFruit = (updatedFruit: Fruit) => {
    if (editFruitIndex !== null) {
      const updatedFruits = fruitsList.map((fruit, index) => {
        if (index === editFruitIndex) {
          return updatedFruit;
        }
        return fruit;
      });
      setFruitsList(updatedFruits);
      setFruits(updatedFruits);
    }
    setEditFruitIndex(null);
  };

  const handleCloseEditWindow = () => {
    setEditFruitIndex(null);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredFruits = fruitsList.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fruits-list">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>
            <strong>Name:</strong> {fruit.name}, <strong>Price:</strong> {fruit.price} per kilo,{' '}
            <strong>Quantity:</strong> {fruit.quantity}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {editFruitIndex !== null && (
        <EditWindow
          fruit={fruitsList[editFruitIndex]}
          onUpdateFruit={handleUpdateFruit}
          onClose={handleCloseEditWindow}
        />
      )}
    </div>
  );
};

export default FruitsList;
