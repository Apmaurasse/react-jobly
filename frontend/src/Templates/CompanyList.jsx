import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoblyAppStyles.css"
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";


const CompanyList = ({ companies }) => {
  useConfirmLoggedIn();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter(company => {
    const { name, num_employees: numEmployees, description } = company;
    // Check if numEmployees is not null before converting it to a string
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (numEmployees !== null && numEmployees.toString().includes(searchTerm)) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>

      <section className="section-container">
      <h1 className="title-container">Companies</h1>
      <input
        type="text"
        placeholder="Search companies..."
        value={searchTerm}
        onChange={handleChange}
      />
        {filteredCompanies.map(company => (
          <div className="item-container" key={company.handle}>
            <Link to={`/companies/${company.handle}`}>
              <h2>{company.name}</h2>
            </Link>
            {/* Check if numEmployees is not null before displaying it */}
            {company.num_employees !== null && <p>Employees: {company.num_employees}</p>}
            <p>{company.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CompanyList;





