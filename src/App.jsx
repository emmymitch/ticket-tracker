import { useState } from 'react';
import './App.scss';
import EmployeeCards from "./components/EmployeeCard/EmployeeCard.jsx";
import team from "./data/team.js";
import Input from './components/Input/Input';

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

  //Get list of job roles for dropdown filter
  let jobRoles = [];
  const optionList = team.map((employee) => {
    if (jobRoles.indexOf(employee.role) === -1){
      jobRoles.push(employee.role);
      return <option key={employee.role} value={employee.role}>{employee.role}</option>;
    } else {
      return "";
    }
  })

  const filterByJob = (event) => {
    const filterTerm = event.target.value;
    const filterList = [];

    team.forEach((employee) => {
      //If no filter selected
      if (filterTerm === "all"){
        filterList.push(employee);

      //Otherwise check role against filter
      } else if (employee.role.toLowerCase() === filterTerm.toLowerCase()){
        filterList.push(employee);
      }
    }) 
    
    setCardsToRender(filterList);
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
            
            <br />
            <Input label="Search by name: " name="searchBar" type="text" func={searchEmployees} />
            
            <br />
            <br />
            <label htmlFor='jobFilter'>Filter by job title: </label>
            <select onChange={filterByJob} className='dropdownFilter' name='jobFilter'>
              <option value="all">No filter</option>
              {optionList}
            </select>

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