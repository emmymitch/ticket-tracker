import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

export const EmployeeCards = ({team, title}) => {
    const cardList = team.map((employee) => {
        return (
            <div key={employee.id} className="team-card">
                <h3 className="team-card__name">{employee.name}</h3>
                <p className="team-card__role">{employee.role}</p>
                <Counter title={title} />
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