import axios from "axios";
const API_URL = "http://192.168.31.200:8080/api/auth/";
class AuthService {
  login(username:string, password:string) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.clear();
  }
  register(username:string, password:string) {
    return axios.post(API_URL + "signup", {
      username,
      password,
    });
  }
}
export default new AuthService();