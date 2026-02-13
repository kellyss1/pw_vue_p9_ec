<template>

    <div class="general-view">
        <h1>General View</h1>
        <LoginView />
        <Vehiculo />
    </div>
</template>

<script>
import Vehiculo from "../components/Vehiculo.vue";
import LoginView from "./LoginView.vue";
export default {

    components: {
        Vehiculo,
        LoginView
    }
}
</script>

<style>

</style>