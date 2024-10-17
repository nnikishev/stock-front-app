import React from 'react';

const Tag = ({ title, isSelected, onClick }) => {

    return (
        <div className={`tag-item ${ isSelected ? 'tag-item-active' : ''}`} onClick={onClick}>
            {title}
        </div>
    );
};

export default Tag;