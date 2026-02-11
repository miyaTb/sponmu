import React from 'react';
import './FormField.css';

const FormField = ({ children, labelAs = 'h2' }) => {
    return (
        <div className={`form-field ${labelAs === 'h3' ? 'form-field--h3' : 'form-field--h2'}`}>
            {children}
        </div>
    );
};

export default FormField;
