import './App.scss';
import EmployeeCards from "./components/EmployeeCard/EmployeeCard.jsx";
import team from "./data/team.js";
//import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Employee Ticket Tracker</h1>
        </header>

        <section className="tracker-section">
          <EmployeeCards team={team} />
        </section>
      </div>
    </>
  );
}

export default App;