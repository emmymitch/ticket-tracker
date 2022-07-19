import { useState } from "react";
import "./Counter.scss";

export const Counter = ({title}) => {
    const [ticketCount, setTicketCount] = useState(0);
    
    const increment = () => {
        setTicketCount(ticketCount + 1);
    }

    const decrement = () => {
        if (ticketCount > 0){
            setTicketCount(ticketCount - 1);
        } else{
            return;
        }
    }
    
    return (
        <div className="counter-box">
            <p className="title">{title}</p>
            <p>{ticketCount}</p>
            <div className="increments">
                <button onClick={decrement} className="increments__button">-</button>
                <button onClick={increment} className="increments__button">+</button>
            </div>
        </div>
    )
}

export default Counter;