import "./Filter.scss";

export const Filter = ({name, label, type, func}) => {
    const eventListener = document.querySelector(`.${name}`)
    console.log(eventListener);
    eventListener.addEventListener("input", func);

    return (
        <>
            <label for={name}>{label}</label>
            <input className={name} name={name} type={type}></input>
        </>
    )
}

export default Filter;