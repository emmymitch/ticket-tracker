import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

export const EmployeeCards = ({team}) => {
    const cardList = team.map((employee) => {
        return (
            <div key={employee.id} className="team-card">
                <h3>{employee.name}</h3>
                <p>{employee.role}</p>
                <Counter />
            </div>
        )
    })

    return (
        <>
            {cardList}
        </>
    )
}

export default EmployeeCards;