<template>
    <div id="login">
        <h1 :style="'color:' + props.color">Autenticação</h1>
        <input type="text" placeholder="Usuário" v-model="user">
        <input type="password" placeholder="Senha" v-model="pass">
        <button @click="login">Entrar</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const emits = defineEmits(['authenticated']);
const props = defineProps({ color: String });
const user = ref('');
const pass = ref('');
const login = () => {
    if (user.value === 'ivan' && pass.value === '123') {
        emits('authenticated', true);
    }
};
</script>
<style>
#login {
    max-width: 700px;
    margin: auto;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}
</style>