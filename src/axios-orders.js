import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-af12d.firebaseio.com/"
});

export default instance;
