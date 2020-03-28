import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

async function fetchOrder() {
  const response = await api.post("/beans");
  const data = response.data;
  return data;
}

export { fetchMenu, fetchOrder };
