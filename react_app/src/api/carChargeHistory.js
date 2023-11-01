import axios from "axios";

const BASE_URL = "https://54.163.202.137:3000/api/car-charge-history";

export const createChargeHistory = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllChargeHistories = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getChargeHistoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateChargeHistory = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteChargeHistory = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
