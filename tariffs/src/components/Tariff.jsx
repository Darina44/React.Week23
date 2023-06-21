import './Tariff.scss';

function Tariff(props) {
    const { name, price, speed, features, color } = props;

    return (
        <div className="tariff-card">
            <div className="tariff-name">{name}</div>
            <div className="tariff-price">руб {price} /мес</div>
            <div className="tariff-speed">до {speed} Mbit/сек</div>
            <div className="tariff-features">{features}</div>
        </div>
    )
}

export default Tariff;