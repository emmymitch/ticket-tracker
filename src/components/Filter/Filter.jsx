import "./Filter.scss";

export const Filter = ({name, label, type, func}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input onChange={func} className={name} name={name} type={type}></input>
        </>
    )
}

export default Filter;