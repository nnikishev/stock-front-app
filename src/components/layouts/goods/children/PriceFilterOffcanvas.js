import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Tag from './Tag';
const PriceFilterOffcanvas = ({ show, handleClose, minPrice, setMinPrice, 
    maxPrice, setMaxPrice, tag, setTag, selectedTags, setSelectedTags }) => {
    
    const [tags, setTags] = useState([])

    useEffect( () => {
        fetch("http://194.87.213.123:8000/api/tags/")
        .then((response) => response.json())
        .then((json) => setTags(json))
    }, [])


    
    const toggleTag = (uuid) => {
        // console.log("выбранныеЭ теги", selectedTags);
        // console.log(uuid)
        if (selectedTags.includes(uuid)) {
            console.log("before ", tag)
            console.log("before ", selectedTags)
            setTag(tag.filter(function(item) {
                return item !== uuid}))
            
            setSelectedTags(selectedTags.filter(function(item) {
                return item !== uuid
            }))
            console.log("after", tag)
            console.log("after", selectedTags)
        } else {
            console.log('pam')
            setTag([...tag, uuid])
            setSelectedTags([...selectedTags, uuid])
            
        }
       
    };


    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Фильтры</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h5>Мин цена: {minPrice} Р </h5>
                <RangeSlider
                    value={minPrice}
                    min={0}
                    max={65535} // Adjust according to your product price range
                    onChange={e => setMinPrice(parseInt(e.target.value))}
                    tooltipPlacement="top"
                    tooltip={"on"}
                    step={10}
                />
                <h5>Макс цена: {maxPrice} Р</h5>
                <RangeSlider
                    value={maxPrice}
                    min={0}
                    max={65535} // Adjust according to your product price range
                    onChange={e => setMaxPrice(parseInt(e.target.value))}
                    tooltipPlacement="top"
                    tooltip={"on"}
                    step={10}
                />
                <p>Цена: {minPrice} - {maxPrice} Р</p>
                <div className='tags-cloud'>
                {tags && tags.map((item, index) => (

                    <Tag
                    key={item.uuid}
                    title={item.title}
                    isSelected={selectedTags.includes(item.title)}
                    onClick={() => toggleTag(item.title)}
                    />
                    // <p className='tag-item'
                    // onClick={e => handleTag(item, index)} 
                    // style={tagStyle} 
                    // key={item.uuid}
                    // isSelected={selectedTags.includes(tag.uuid)}
                    // >{item.title}</p>
                ))}
            </div>
                <button className='filter-button' variant="primary" onClick={handleClose}>
                    Фильтр
                </button>
                
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PriceFilterOffcanvas;