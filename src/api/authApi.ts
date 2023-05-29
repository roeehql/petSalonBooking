import axios from "axios";

export interface AuthState {
    tel: string;
    name: string;
    password:string;
}

type LoginState = Pick<AuthState, "tel" | "password">

export const axiosApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `${localStorage.getItem("USER_TOKEN")}`,
  },
});

const AuthApi = {
  login: async ({ tel, password }: LoginState) => {
    const { data } = await axiosApi.post("/users/login", {
        tel,
        password,
    });
    return data;
  },
  signup: async ({ tel, name, password }: AuthState) => {
    const { data } = await axiosApi.post("/users/create", { 
        tel,
        name,
        password,
    });
    return data;
  },
};

export default AuthApi;