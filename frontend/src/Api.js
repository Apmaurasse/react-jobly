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


    static async addUser(userData) {
        try {
          // Extract data from userData
          const { username, first_name, last_name, email, password, isAdmin=false } = userData;
    
          // Construct user object
          const newUser = { username, first_name, last_name, email, password, isAdmin };
    
          // Make a POST request to add the new user
          const response = await axios.post(`${BASE_API_URL}/users`, newUser);
    
          return response.data; // Return the newly added user
        } catch (error) {
          throw new Error("Error adding new user: " + error.message);
        }
      };

      static async findUser(loginData) {
        try {
            const { username, password } = loginData;
    
            // Make a GET request to your backend to check if the user exists
            const response = await axios.get(`${BASE_API_URL}/users`, {
                params: {
                    username,
                    password
                }
            });
    
            // Assuming your backend returns a specific response indicating login success
            if (response.data && response.data.length > 0) {
                const user = response.data[0];
                // Check if the password matches
                if (user.password === password) {
                    // If the login was successful, store the user data in localStorage
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // Return the user data
                    return user;
                } else {
                    // If the password doesn't match, throw an error
                    throw new Error("Invalid password");
                }
            } else {
                // If the user doesn't exist, throw an error
                throw new Error("Invalid username/password");
            }
        } catch (error) {
            // If there's an error (e.g., network error), handle it
            throw new Error(error.message);
        }
    };

    static async logoutUser(logoutData) {
        try {
            const { username } = logoutData;

            const response = await axios.get(`${BASE_API_URL}/users`, {
                params: {
                    username
                }
            });
            
            if (response.data && response.data.length > 0) {
                const user = response.data[0];
                if (user.username === username) {
                    localStorage.removeItem('currentUser');
                    return user;
                } else {
                    throw new Error("No match");
                }
            } else {
                throw new Error("Incorrect user");
            }
        } catch (error) {
            // If there's an error (e.g., network error), handle it
            throw new Error(error.message);
        }
    };
    
    

}

export default JoblyApi;
