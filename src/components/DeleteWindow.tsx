import React from 'react';
import './styles/DeleteWindow.css';

interface DeleteWindowProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteWindow: React.FC<DeleteWindowProps> = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-window-overlay">
      <div className="delete-window">
        <button className="close-button" onClick={onCancel}>
          <span className="close-button-text">X</span>
        </button>
        <h2>Excluir Fruta</h2>
        <p>Tem certeza que quer excluir essa fruta? Você perderá todas as informações cadastradas sobre ela.</p>
        <div>
          <button onClick={onDelete} className='delete-yes'>Sim, excluir</button>
          <button onClick={onCancel}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
