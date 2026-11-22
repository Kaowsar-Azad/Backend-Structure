import { ApiError } from "../../utils/ApiError.js";
import { Ilogin } from "./auth.types.js";

const login = (payload: Ilogin) => {
    const { email, password} = payload;

    const user ={
        name: "kaowsar",
        email:"kaowsar@gmail.com",
        password:"1234",
    }
    if (user.email !== email){
        throw new ApiError(404, "User not found")
    }
     if (user.password !== password) {
    throw new ApiError(401, "Wrong Password");
  }
  return user;
}
export const authService = {
    login,
}