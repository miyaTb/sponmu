import React from 'react';
import './FormFieldset.css';

const FormFieldset = ({ legend, children, className = '' }) => {
    return (
        <fieldset className={`form-fieldset ${className}`}>
            {legend && <legend className="form-fieldset__legend">{legend}</legend>}
            {children}
        </fieldset>
    );
};

export default FormFieldset;
