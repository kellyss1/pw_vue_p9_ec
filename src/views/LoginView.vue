<template>
  
  <div class="formulario">
    <h2>Token</h2>
    <form @submit.prevent="ingresar">
        <div>
            <label for="token">Token</label>
            <input v-model="token" id="token" type="text" required>
        </div>
        <div>
            <label for="user">Usuario</label>
            <input v-model="user" id="user" type="text" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input v-model="password" id="password" type="text" required>
        </div>
        <div>
            <label for="role">Role</label>
            <input v-model="role" id="role" type="text" required>
        </div>
        <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
import { obtenerToken } from '@/clients/VehiculoClient';
export default {

    data() {
        return {
            token: "",
            user: "",
            password: "",
            role:""
        }
    },
    methods: {
        async ingresar() {
            const token = await obtenerToken(this.user, this.password);
            localStorage.setItem("token", token);
            localStorage.setItem("user", this.user);
            localStorage.setItem("password", this.password);
            localStorage.setItem("role", this.role);
        }
    }
}
</script>

<style scoped>

    .formulario {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
</style>