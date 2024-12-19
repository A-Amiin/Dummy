import React from 'react';
import '../../assets/styles/blog.css'
const Aside = ({ title, children, className }) => {
    return (
        <div className={`Aside ${className}`}>
            <div className="Aside-title">
                <h3>{title}</h3>
            </div>
            <div className="Aside-content">
                {children}
            </div>
        </div>
    );
};

export default Aside;