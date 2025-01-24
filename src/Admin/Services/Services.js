import axios from "axios";


// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://solwyz.medocpharmacy.com/hrms/api",
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  },
});

// Token Validation
// export const validateAdminToken = async (token) => {
//   try {
//     const response = await apiClient.post("/validate-token", { token });
//     return response.data?.isValid ?? false; // Use optional chaining and default value
//   } catch (error) {
//     console.error("Token validation failed:", error.message);
//     return false;
//   }
// };

// Admin Login
export const loginAdmin = async (phoneOrEmail, password) => {
  try {
    const response = await apiClient.post("/auth/authenticate", {
      username: phoneOrEmail, // Use phoneOrEmail instead of username
      password,
    });
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error in loginAdmin:", error.message);
    throw new Error(error.response?.data?.message || "Login failed.");
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
