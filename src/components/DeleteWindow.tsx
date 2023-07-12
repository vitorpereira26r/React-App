import React from 'react';
import './styles/Window.css';

interface DeleteWindowProps {
  title: string;
  message: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteWindow: React.FC<DeleteWindowProps> = ({ title, message, onDelete, onCancel }) => {
  return (
    <div className="create-window-overlay">
      <div className="create-window">
        <button className="close-button" onClick={onCancel}>
          <span className="close-button-text">X</span>
        </button>
        <h2>{title}</h2>
        <p>{message}</p>
        <div>
          <button onClick={onDelete}>Sim, excluir</button>
          <button onClick={onCancel}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
