import axios, { Method } from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiResource = async (url: string, method: Method, data: any) => {
  return await client({
    url,
    method,
    data,
  })
    .then((res) => res.data)
    .catch((err) => err);
};
