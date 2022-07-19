import { useState } from "react";
import "./Counter.scss";

export const Counter = ({title}) => {
    const [ticketCount, setTicketCount] = useState(0);
    const [counterClass, setCounterClass] = useState("counter-box counter-box--normal");
    
    const checkTickets = (tickets) => {
        if (tickets < 5){
            setCounterClass("counter-box counter-box--normal");
        } else if (tickets < 10){
            setCounterClass("counter-box counter-box--warning");
        } else {
            setCounterClass("counter-box counter-box--emergency");
        }
    }

    const increment = () => {
        setTicketCount(ticketCount + 1);
        checkTickets(ticketCount + 1);
    }

    const decrement = () => {
        if (ticketCount > 0){
            setTicketCount(ticketCount - 1);
        } else{
            return;
        }
        checkTickets(ticketCount - 1);
    }
    
    return (
        <div className={counterClass}>
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