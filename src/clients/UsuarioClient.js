import axios from "axios";

const URL = "http://localhost:8081/api/vehiculos"

const listarTodos = async () => {
    const data = await axios.get(URL).then(response => response.data);
    return data;
}

const eliminar = async (id) => {
    const data = await axios.delete(URL + "/" + id).then(response => response.data);
    return data;
}

const crear = async (vehiculo) => {
    const data = await  axios.post(URL, vehiculo).then(response => response.data);
    return data;
}

export { listarTodos, eliminar, crear };