import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useConfirmLoggedIn from '../Helpers/useConfirmLoggedIn';


const JobCard = ({ jobs }) => {
    useConfirmLoggedIn();

    const { id } = useParams();

    const job = jobs.find(job => job.id === id);

    if (!job) {
        // Redirect to /jobs if job not found
        return <Navigate to="/jobs" replace />;
    }

    return (

    <section className="section-container">
        <div className="company-container">
            <p>Title: {job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
        </div>
    </section>
    );
};

export default JobCard;