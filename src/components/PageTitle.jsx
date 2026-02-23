import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title, subtitle }) => {
    return (
        <>
            <h1 className="page-title__title">{title}</h1>
            <h3 className="page-title__subtitle">{subtitle}</h3>
        </>
    );
};

export default PageTitle;
