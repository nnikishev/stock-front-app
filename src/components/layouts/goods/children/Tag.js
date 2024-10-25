import React from 'react';

const Tag = ({ title, isSelected, onClick }) => {

    return (
        <span className={`tag-item ${ isSelected ? 'tag-item-active' : ''}`} onClick={onClick}>
            {title}
        </span>
    );
};

export default Tag;