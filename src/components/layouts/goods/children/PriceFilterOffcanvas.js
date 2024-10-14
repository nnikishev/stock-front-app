import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const PriceFilterOffcanvas = ({ show, handleClose, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
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
                    max={2000} // Adjust according to your product price range
                    onChange={e => setMinPrice(parseInt(e.target.value))}
                    tooltipPlacement="top"
                    tooltip={"on"}
                    step={10}
                />
                <h5>Макс цена: {maxPrice} Р</h5>
                <RangeSlider
                    value={maxPrice}
                    min={0}
                    max={2000} // Adjust according to your product price range
                    onChange={e => setMaxPrice(parseInt(e.target.value))}
                    tooltipPlacement="top"
                    tooltip={"on"}
                    step={10}
                />
                <p>Цена: {minPrice} - {maxPrice} Р</p>
                <button className='filter-button' variant="primary" onClick={handleClose}>
                    Фильтр
                </button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PriceFilterOffcanvas;