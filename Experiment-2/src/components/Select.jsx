import React from 'react';

const Select = ({ label, value, onChange, options = [] }) => {
    return (
        <div style={{ marginBottom: '15px' }}>
            {label && <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>}
            <select
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    backgroundColor: '#fff',
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
