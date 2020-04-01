import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

// Begins to fetch the data from the URL
async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

// Post the order with the properties items, total value and item key
async function fetchOrder(items, totalValue, key) {
  const response = await api.post("/beans", {
    items: items,
    totalValue: totalValue,
    key: key
  });
  const data = response.data;
  return data;
} 

// Fetch the key
async function fetchKey() {
  const response = await api.get("/beans/key");
  const data = response.data;
  return data;
}

// Fetch the user order using id(uuid)
async function fetchUserOrder(id) {
  const response = await api.get("/beans/profile" + `/${id}`);
  const data = response.data;
  return data;
}

export { fetchMenu, fetchOrder, fetchKey, fetchUserOrder };
