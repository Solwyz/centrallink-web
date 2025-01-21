import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Login API
export const loginAdmin = async (username, password) => {
  try {
    const response = await apiClient.post("/login", {
      username,
      password,
    });
    return response.data; // Return the data received from the API
  } catch (error) {
    // Rethrow the error to be handled by the caller
    throw error.response?.data?.message || "Login failed.";
  }
};

// Other API functions can be added here (e.g., logout)
export const logoutAdmin = async (userId) => {
  try {
    const response = await apiClient.post(`/logout?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Logout failed.";
  }
};

export default apiClient;
