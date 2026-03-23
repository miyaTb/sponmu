import React from 'react';
import './FormInput.css';

const FormInput = ({
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    showArrow = false,
    error = false,
    ...props
}) => {
    return (
        <input
            className={`form-input ${showArrow ? 'form-input--with-arrow' : ''} ${error ? 'form-input--error' : ''} ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

export default FormInput;
