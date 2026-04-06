import React from 'react';
import './ActionButton.css';

const ActionButton = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
    return (
        <button
            className={`action-button action-button--${variant} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ActionButton;
