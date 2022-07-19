import "./Counter.scss";

export const Counter = ({title}) => {
    let count = 0;

    // const increment = () => {
    //     count ++;
    //     this.setState({counter: count});
    // }

    // const decrement = () => {
    //     if (count > 0){
    //         count --;
    //         this.setState({counter: count});
    //     } else{
    //         return;
    //     }
    // }
    
    return (
        <div className="counter-box">
            <p className="title">{title}</p>
            <p>{count}</p>
            <div className="increments">
                <button className="increments__button">-</button>
                <button className="increments__button">+</button>
            </div>
        </div>
    )
}

export default Counter;