<template>
  <div>
    <h2>Vehiculo</h2>
    <div>
        <form @submit.prevent="guardarVehiculo">
            <div>
                <label for="token">Token</label>
                <input v-model="token" id="token" type="text" required>
            </div>
            <div>
                <label for="marca">Marca</label>
                <input v-model="marca" id="marca" type="text" required>
            </div>
            <div>
                <label for="modelo">Modelo</label>
                <input v-model="modelo" id="modelo" type="text" required>
            </div>
            <div>
                <label for="chasis">Chasis</label>
                <input v-model="chasis" id="chasis" type="text" required>
            </div>
            <div>
                <label for="fechaMatricula">Fecha Matricula</label>
                <input v-model="fechaMatricula" id="fechaMatricula" type="text" required>
            </div>
            <div>
                <label for="fechaFabricacion">Fecha Fabricacion</label>
                <input v-model="fechaFabricacion" id="fechaFabricacion" type="text" required>
            </div>

            <button type="submit">Guardar Vehiculo</button>
        </form>
    </div>
    
    <div>
        <h3>Lista de Vehiculos</h3>
        <p v-if="errorMessage" style="color: #b00020;">{{ errorMessage }}</p>
        <button @click="listarVehiculos">Actualizar Lista</button>
        <table border="1">
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Chasis</th>
                    <th>Fecha Matricula</th>
                    <th>Fecha Fabricacion</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
                    <td>{{ vehiculo.marca }}</td>
                    <td>{{ vehiculo.modelo }}</td>
                    <td>{{ vehiculo.chasis }}</td>
                    <td>{{ vehiculo.fechaMatricula }}</td>
                    <td>{{ vehiculo.fechaFabricacion }}</td>
                    <td><button @click="eliminarVehiculo(vehiculo.id)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>

    </div>
  </div>
</template>

<script>
import {listarTodos, eliminar, crear} from "@/clients/UsuarioClient";
 
export default {
    data() {
        return {
            token: "",
            id: null,
            marca: "",
            modelo: "",
            chasis: "",
            fechaMatricula: "",
            fechaFabricacion: "",

            vehiculos: [],
            errorMessage: ""
        }
    },
    methods: {
        async guardarVehiculo() {
            this.errorMessage = "";
            try {
                await crear({
                    marca: this.marca,
                    modelo: this.modelo,
                    chasis: this.chasis,
                    fechaMatricula: this.fechaMatricula,
                    fechaFabricacion: this.fechaFabricacion
                });
                await this.listarVehiculos();
                this.marca = "";
                this.modelo = "";
                this.chasis = "";
                this.fechaMatricula = "";
                this.fechaFabricacion = "";
            } catch (error) {
                this.errorMessage = "No se pudo guardar el vehiculo.";
                console.error(error);
            }
        },
        async eliminarVehiculo(id) {
            this.errorMessage = "";
            try {
                await eliminar(id);
                this.listarVehiculos();
            } catch (error) {
                this.errorMessage = "No se pudo eliminar el vehiculo.";
                console.error(error);
            }
        },
        async listarVehiculos() {
            this.errorMessage = "";
            try {
                this.vehiculos = await listarTodos();
            } catch (error) {
                this.errorMessage = "No se pudo cargar la lista de vehiculos.";
                console.error(error);
            }
        }
           
    },
    async mounted() {
        await this.listarVehiculos();
    }
}
</script>

<style>

</style>