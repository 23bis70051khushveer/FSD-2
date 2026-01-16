import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '10px',
                    cursor: 'pointer',
                }}
            />
            {label && <label style={{ cursor: 'pointer' }}>{label}</label>}
        </div>
    );
};

export default Checkbox;
