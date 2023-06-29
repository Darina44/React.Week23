import React, { useState } from 'react';

function Tariff(props) {

    const { name, price, speed, features, color, isSelected } = props;

    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected);
    };

    let tariffSelected = "";
    if (selected) tariffSelected = "selected";
    return (
        <div className={`tariff-card ${color} ${tariffSelected}`}
            onClick={handleChange}>
            <div className="tariff-name">{name}</div>
            <div className="tariff-price">{price}</div>
            <div className="tariff-speed">до {speed} Mbit/сек</div>
            <div className="tariff-features">{features}</div>
        </div >
    )
}

export default Tariff;