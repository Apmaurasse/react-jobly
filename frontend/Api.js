import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class JoblyApi {

    static async getCompanies() {
        const result = await axios.get(`${BASE_API_URL}/companies`);
        return result.data;
      };

      static async getJobs() {
        const result = await axios.get(`${BASE_API_URL}/jobs`);
        return result.data;
      };

}


export default JoblyApi;