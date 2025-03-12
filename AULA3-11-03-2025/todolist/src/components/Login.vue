<template>
    <div id="login">
        <h1 :style="'color:' + props.color">Autenticação</h1>
        <input type="text" placeholder="Usuário" v-model="user">
        <input type="password" placeholder="Senha" v-model="pass">
        <button @click="login">Entrar</button>
        <p>Verificação da senha</p>
        <ul>
            <li v-if="!check.size">A senha deve ter no mínimo 6 caracteres</li>
            <li v-if="!check.lowercase">A senha deve ter no mínimo 1 letra minúscula</li>
            <li v-if="!check.uppercase">A senha deve ter no mínimo 1 letra maiúscula</li>
            <li v-if="!check.number">A senha deve ter no mínimo 1 número</li>
            <li v-if="!check.special">A senha deve ter no mínimo 1 caractere especial</li>     
        </ul>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch, watchEffect } from 'vue';
const emits = defineEmits(['authenticated']);
const props = defineProps({ color: String });
const user = ref('');
const pass = ref('');
const check = ref({
    size: false,
    lowercase: false,
    uppercase: false,
    number: false,
    special: false
});
const login = () => {
    if (user.value === 'ivan' && pass.value === '123') {
        emits('authenticated', true);
    }
};
// observa uma variável específica, ou um conjunto deles.
watch(pass, (value) => {
    check.value.size = value.length > 6
    check.value.lowercase = /[a-z]/.test(value)
    check.value.uppercase = /[A-Z]/.test(value)
    check.value.number = /[0-9]/.test(value)
    check.value.special = /[^a-zA-Z0-9]/.test(value)
});
// watch effect é uma função que é executada sempre que uma variável reativa é alterada.
watchEffect(() => {
    console.log('Senha:', pass.value);
    console.log('Usuário:', user.value);
    console.log('Tamanho:', check.value.size);
});
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