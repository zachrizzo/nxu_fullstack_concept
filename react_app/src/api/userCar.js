import axios from "axios";

const BASE_URL = "http://localhost:8000/api/user-cars";
export const createUserCar = async (userCar) => {
  try {
    const response = await axios.post(BASE_URL, userCar);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllUserCars = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserCarsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUserCar = async (userId, carId, updatedUserCar) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${userId}/${carId}`,
      updatedUserCar
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUserCar = async (userId, carId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}/${carId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
