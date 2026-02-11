import React from 'react';
import './FormSelect.css';

const FormSelect = ({
    value,
    onChange,
    options = [],
    placeholder = '',
    className = '',
    error = false,
    ...props
}) => {
    const hasPlaceholder = placeholder && !value;

    return (
        <select
            className={`form-select ${hasPlaceholder ? 'form-select--placeholder' : ''} ${error ? 'form-select--error' : ''} ${className}`}
            value={value}
            onChange={onChange}
            {...props}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option, index) => (
                <option key={index} value={option.value || option}>
                    {option.label || option}
                </option>
            ))}
        </select>
    );
};

export default FormSelect;
