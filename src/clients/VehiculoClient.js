import axios from "axios";

const URL = "http://localhost:8082/auth/token"

export async function obtenerToken(user, password) {
    const parametros = {
        user: user,
        password: password
    }
    const data = await axios.post(URL, parametros).then(response => response.data);
    localStorage.setItem("token", data.token);
    
    const token = localStorage.getItem("token");
    return token;
}