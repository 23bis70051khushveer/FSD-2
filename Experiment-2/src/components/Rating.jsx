import React from 'react';

const Rating = ({ value, onChange, max = 5 }) => {
    return (
        <div style={{ display: 'flex', gap: '5px' }}>
            {[...Array(max)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => onChange(starValue)}
                        style={{
                            cursor: 'pointer',
                            fontSize: '24px',
                            color: starValue <= value ? '#ffc107' : '#e4e5e9',
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
