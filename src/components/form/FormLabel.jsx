import React from 'react';
import './FormLabel.css';

const FormLabel = ({ children, error, className = '', as = 'h2' }) => {
    const Tag = as;
    const headingClass = as === 'h3' ? 'form-label--h3' : '';
    return (
        <Tag className={`form-label ${headingClass} ${className}`}>
            {children}
            {error && <span className="form-label__error">{error}</span>}
        </Tag>
    );
};

export default FormLabel;
