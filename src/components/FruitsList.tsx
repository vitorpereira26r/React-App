import React, { useState, useEffect } from 'react';
import EditWindow from './EditWindow';
import './FruitsList.css'

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

interface FruitsListProps {
  fruits: Fruit[];
  setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
}

const FruitsList = ({ fruits, setFruits }: FruitsListProps) => {
  const [fruitsList, setFruitsList] = useState<Fruit[]>(fruits);
  const [editFruitIndex, setEditFruitIndex] = useState<number | null>(null);

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

  return (
    <div className='fruits-list'>
      <h2>Fruits List</h2>
      <ul>
        {fruitsList.map((fruit, index) => (
          <li key={index}>
            <strong>Name:</strong> {fruit.name}, <strong>Price:</strong> {fruit.price} per kilo, <strong>Quantity:</strong> {fruit.quantity}
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
