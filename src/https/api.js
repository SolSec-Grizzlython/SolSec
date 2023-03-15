import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
  baseURL: "https://blocsoc.iitr.ac.in/solsec/",
  "Content-type": "application/json",
  Accept: "application/json",
  withCredentials: true,
  method: "*",
});

export default api;
