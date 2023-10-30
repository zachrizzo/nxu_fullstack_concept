import axios from "axios";

const BASE_URL =
  "http://ec2-54-163-202-137.compute-1.amazonaws.com:3000/api/users"; // Replace with your server's base URL

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    alert(error.response.data);
  }
};

export const verifyToken = async (token) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-token`, null, {
      headers: { "x-auth-token": token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
