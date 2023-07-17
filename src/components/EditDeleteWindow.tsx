import React, { useState } from 'react';
import EditWindow from './EditWindow';
import DeleteWindow from './DeleteWindow';
import './styles/EditDeleteWindow.css'

interface Fruit {
  name: string;
  price: number;
  quantity: number;
}

interface EditDeleteWindowProps {
  fruit: Fruit;
  onUpdateFruit: (updatedFruit: Fruit) => void;
  onDelete: () => void;
  onClose: () => void;
}

const EditDeleteWindow: React.FC<EditDeleteWindowProps> = ({ fruit, onUpdateFruit, onDelete, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
    setDeleteMode(false);
  };

  const handleDelete = () => {
    setDeleteMode(true);
    setEditMode(false);
  };

  const handleClose = () => {
    setEditMode(false);
    setDeleteMode(false);
    onClose(); // Fechar a janela após a conclusão da ação
  };

  return (
    <div className='edit-delete-window-overlay'>
      <div className='edit-delete-window'>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {(!editMode && !deleteMode) && (
          <div>
            <button onClick={handleEdit} className='button'><span className='edit-icon'>&#9998;</span>Edit</button>
            <button onClick={handleDelete}><span className='delete-icon'>&#128465;</span>Delete</button>
          </div>
        )}
        {editMode && (
          <EditWindow
            fruit={fruit}
            onUpdateFruit={(updatedFruit) => {
              onUpdateFruit(updatedFruit);
              handleClose();
            }}
            onClose={handleClose}
          />
        )}
        {deleteMode && (
          <DeleteWindow
            onDelete={() => {
              onDelete();
              handleClose();
            }}
            onCancel={handleClose}
          />
        )}
      </div>
    </div>
  );
};

export default EditDeleteWindow;
