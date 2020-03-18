import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

export { fetchMenu };
