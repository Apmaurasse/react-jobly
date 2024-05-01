import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CompanyList.css"; // Import the CSS file

const CompanyList = ({ companies }) => {
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
      <h1>This is the companies page.</h1>
      <input
        type="text"
        placeholder="Search companies..."
        value={searchTerm}
        onChange={handleChange}
      />
      <section className="section-container">
        {filteredCompanies.map(company => (
          <div className="company-container" key={company.handle}>
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





