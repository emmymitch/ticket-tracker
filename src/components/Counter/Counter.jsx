import "./Counter.scss";

export const Counter = ({title}) => {
    return (
        <div className="counter-box">
            <p className="title">{title}</p>
            <p>0</p>
            <div className="increments">
                <p className="increments__button">-</p>
                <p className="increments__button">+</p>
            </div>
        </div>
    )
}

export default Counter;