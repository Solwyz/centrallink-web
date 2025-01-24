import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://solwyz.medocpharmacy.com/admin/api", // Directly set the base URL
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
});

// Token Validation
export const validateAdminToken = async (token) => {
  try {
    const response = await apiClient.post("/validate-token", { token });
    return response.data?.isValid ?? false; // Use optional chaining and default value
  } catch (error) {
    console.error("Token validation failed:", error.message);
    return false;
  }
};

// Admin Login
export const loginAdmin = async (username, password) => {
  try {
    console.log("Attempting to login with Username:", username);

    const response = await apiClient.post("/auth/authenticate", {
      username,
      password,
    });

    console.log("API Response:", response);

    return response.data;
  } catch (error) {
    console.error("Error in loginAdmin:", error.message);

    if (error.response) {
      console.error("Error Response:", error.response);
      throw new Error(error.response?.data?.message || "Login failed. Please try again.");
    } else {
      throw new Error("Login failed. Network or server error.");
    }
  }
};

// Logout API
export const logoutAdmin = async (userId) => {
  try {
    const response = await apiClient.post(`/logout`, { userId });
    return response.data;
  } catch (error) {
    console.error("Error in logoutAdmin:", error.message);
    throw new Error(error.response?.data?.message || "Logout failed.");
  }
};

// Project APIs

// Create a project
export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post("/projects/create", projectData);
    return response.data;
  } catch (error) {
    console.error("Error in createProject:", error.message);
    throw new Error(error.response?.data?.message || "Failed to create project.");
  }
};

// Update a project
export const updateProject = async (projectId, projectData) => {
  try {
    const response = await apiClient.put(`/projects/update/${projectId}`, projectData);
    return response.data;
  } catch (error) {
    console.error("Error in updateProject:", error.message);
    throw new Error(error.response?.data?.message || "Failed to update project.");
  }
};

// Get all projects
export const getAllProjects = async () => {
  try {
    const response = await apiClient.get("/projects/all");
    return response.data;
  } catch (error) {
    console.error("Error in getAllProjects:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch projects.");
  }
};

// Delete a project
export const deleteProject = async (projectId) => {
  try {
    const response = await apiClient.delete(`/projects/delete/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Error in deleteProject:", error.message);
    throw new Error(error.response?.data?.message || "Failed to delete project.");
  }
};

// Add an image to a project
export const addImageToProject = async (projectId, imageData) => {
  try {
    const formData = new FormData();
    formData.append("image", imageData);

    const response = await apiClient.post(`/projects/${projectId}/add-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in addImageToProject:", error.message);
    throw new Error(error.response?.data?.message || "Failed to add image to project.");
  }
};

export default apiClient;
