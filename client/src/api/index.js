import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
});

export const getStocksDeatil = () => api.get(`/stocks`);

const apis = {
    getStocksDeatil
};

export default apis;