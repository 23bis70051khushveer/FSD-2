import React from 'react';

const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
    const styles = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        backgroundColor: disabled ? '#ccc' : variant === 'primary' ? '#007bff' : '#6c757d',
        color: '#fff',
        transition: 'background-color 0.3s',
    };

    return (
        <button style={styles} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
