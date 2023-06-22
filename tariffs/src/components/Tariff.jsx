
function Tariff(props) {
    const { name, price, speed, features, color, isSelected } = props;
    let tariffSelected = "";
    if (isSelected) tariffSelected = "selected";
    return (
        <div className={`tariff-card ${color} ${tariffSelected}`} >
            <div className="tariff-name">{name}</div>
            <div className="tariff-price">{price}</div>
            <div className="tariff-speed">до {speed} Mbit/сек</div>
            <div className="tariff-features">{features}</div>
        </div>
    )
}

export default Tariff;