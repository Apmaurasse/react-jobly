import React, { useState, useEffect } from "react";
import JoblyRoutes from "./JoblyRoutes";
import JoblyApi from "./Api";
import { JoblyProvider } from "./JoblyContext";

const JoblyFrontendApp = () => {

    const[isLoading, setIsLoading] = useState(true);
    const[companies, setCompanies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const companiesData = await JoblyApi.getCompanies();
            setCompanies(companiesData);
            setIsLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []);
    
      if (isLoading) {
        return <p>Loading &hellip;</p>;
      }


    return(
        <>
            <JoblyProvider>
                    <JoblyRoutes companies={companies}/>
            </JoblyProvider>
        </>
    )

}


export default JoblyFrontendApp;