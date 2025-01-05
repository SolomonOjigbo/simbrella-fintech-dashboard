import axios from "axios";
const API_BASE_URL = "https://67781bf980a79bf91903f2f0.mockapi.io/api";
export const fetchUserData = (id) => axios.get(`${API_BASE_URL}/user/${id}`);
export const updateUserData = (userData) => {
    const { id } = userData;
    return axios.put(`${API_BASE_URL}/user/${id}`, userData);
};
export const fetchLoans = () => axios.get(`${API_BASE_URL}/loans`);
