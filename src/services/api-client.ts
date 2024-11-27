import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "29f509161f724a3cbe9e1752181f88e6",
  },
});
