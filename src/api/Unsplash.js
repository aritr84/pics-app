import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AYsekaI4oeYFqQ_a46utU-O_Hb7V1M8sxAnGF6q_9ME",
  },
});
