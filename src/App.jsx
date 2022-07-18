import './App.scss';
import EmployeeCard from "./components/EmployeeCard/EmployeeCard.jsx";
import team from "./data/team.js";

const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Employee Ticket Tracker</h1>
        </header>

        <section className="tracker-section">
          <EmployeeCard team={team} />
        </section>
      </div>
  );
}

export default App;
