import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class JoblyApi {

    static async getCompanies({ minEmployees, maxEmployees, name } = {}) {
        let queryParams = "";
        if (minEmployees !== undefined) {
            queryParams += `&minEmployees=${minEmployees}`;
        }
        if (maxEmployees !== undefined) {
            queryParams += `&maxEmployees=${maxEmployees}`;
        }
        if (name !== undefined) {
            queryParams += `&name=${name}`;
        }
        const result = await axios.get(`${BASE_API_URL}/companies?${queryParams}`);
        return result.data;
    };

    static async getJobs() {
        const result = await axios.get(`${BASE_API_URL}/jobs`);
        return result.data;
    };

}

export default JoblyApi;
