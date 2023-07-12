import React from 'react';
import './styles/Window.css';
import fruitImage from './images/test.1-removebg-preview.png';

interface ConfirmFruitProps {
  onClose: () => void;
}

const ConfirmFruit: React.FC<ConfirmFruitProps> = ({ onClose }) => {
  return (
    <div className="create-window-overlay">
      <div className="create-window">
      <img src={fruitImage} alt="Fruit" className="fruit-image" />
        <button className="close-button" onClick={onClose}>
          <span className="close-button-text">X</span>
        </button>
        <h2>Fruta cadastrada</h2>
        <p>Voce cadastrou uma fruta com sucesso</p>
        <div>
          <button onClick={onClose}>Voltar ao início</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmFruit;
