import React from "react";
import { Link } from "react-router-dom";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";
import "./JoblyAppStyles.css"

const JobList = ({ jobs }) => {
  useConfirmLoggedIn();

  return (
    <div>

      <section className="section-container">
      <h1 className="title-container">Jobs</h1>
        {jobs.map(job => (
          <div className="item-container" key={job.id}>             
            <Link to={`/jobs/${job.id}`}><h2>{job.title}</h2></Link>   
            <Link to={`/companies/${job.company_handle}`}><h2>Company Info</h2></Link>         
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobList;
