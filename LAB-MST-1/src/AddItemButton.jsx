import React from 'react';

function AddItemButton({ onAdd }) {
    return (
        <button className="add-button" onClick={onAdd}>
            Add Item
        </button>
    );
}

export default AddItemButton;
