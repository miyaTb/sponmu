import React from 'react';
import './ActionButton.css';

const ActionButton = ({ children, onClick, variant = 'primary', className = '' }) => {
    return (
        <button
            className={`action-button action-button--${variant} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ActionButton;
