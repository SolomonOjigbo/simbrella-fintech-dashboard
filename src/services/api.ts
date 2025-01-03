import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUserData = () => axios.get(`${API_BASE_URL}/users/1`);
export const fetchTransactions = () => axios.get(`${API_BASE_URL}/transactions`);
export const fetchLoans = () => axios.get(`${API_BASE_URL}/loans`);
