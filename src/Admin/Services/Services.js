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
    throw error.response?.data?.message || "Login failed.";
  }
};

// Logout API
export const logoutAdmin = async (userId) => {
  try {
    const response = await apiClient.post(`/logout?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Logout failed.";
  }
};

// Project APIs
export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post("/projects/create", projectData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to create project.";
  }
};

export const updateProject = async (projectId, projectData) => {
  try {
    const response = await apiClient.put(`/projects/update/${projectId}`, projectData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to update project.";
  }
};

export const getAllProjects = async () => {
  try {
    const response = await apiClient.get("/projects/all");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch projects.";
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await apiClient.delete(`/projects/delete/${projectId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete project.";
  }
};

// Add image to a project
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
    throw error.response?.data?.message || "Failed to add image to project.";
  }
};

export default apiClient;
