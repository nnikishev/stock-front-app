import React from 'react';

const Tag = ({ title, isSelected, onClick }) => {
    const tagStyle = {
        margin: "5px",
        padding: "5px",
        borderRadius: "8px",
        boxShadow: isSelected ? "0 2px 0 2px 10px lightblue": "0 2px 0 2px 10px rgba(0,0,0,0.1)",
        fontSize: "1.3cqi",
        transition: "transform 0.2s",
    };

    return (
        <div style={tagStyle} onClick={onClick}>
            {title}
        </div>
    );
};

export default Tag;