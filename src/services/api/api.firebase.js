import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: "https://digitalglobetrotter-eacda-default-rtdb.firebaseio.com/",
});

export default apiFirebase;
