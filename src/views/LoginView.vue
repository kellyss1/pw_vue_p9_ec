<template>
  
  <div>
    <h2>Token</h2>
    <form @submit.prevent="login">
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
        <button type="submit" @click="ingresar">Ingresar</button>
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

<style>

</style>