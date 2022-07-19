import { useState } from 'react';
import './App.scss';
import EmployeeCards from "./components/EmployeeCard/EmployeeCard.jsx";
import team from "./data/team.js";
import Filter from './components/Filter/Filter';

const App = () => {
  const [cardsToRender, setCardsToRender] = useState(team);

  const searchEmployees = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const searchList = [];

    team.forEach((employee) => {
        if (employee.name.toLowerCase().search(searchTerm) >= 0){
            searchList.push(employee);
        }
    })
    

    setCardsToRender(searchList);
  }

  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Employee Ticket Tracker</h1>
        </header>

        <main className='main'>
          <section className='filter-section'>
            <h3>Filter Employees</h3>
            <br></br>
              <Filter label="Search by name: " name="searchBar" type="text" func={searchEmployees} />
          </section>

          <section className="cards-section">
            <EmployeeCards team={cardsToRender} title="Outstanding Tickets" />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;