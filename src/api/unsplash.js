import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id:
      "09a3e9566ad6b7a3496a598042daafcfadbfbe34795e6d29faed57a36372bec7",
    per_page: 15
  }
});
