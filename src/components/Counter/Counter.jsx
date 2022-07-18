import "./Counter.scss";

export const Counter = ({team}) => {
    return (
        <div className="counter-box">
            <p>Counter</p>
            <p>0</p>
            <div className="increments">
                <p>-</p>
                <p>+</p>
            </div>
        </div>
    )
}

export default Counter;