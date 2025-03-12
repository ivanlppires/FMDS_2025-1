<template>
    <div id="todolist">
        <h1 :style="'color:' + props.color">Lista de Tarefas</h1>
        <input type="text" placeholder="Nova tarefa">
        <button>Adicionar</button>
        <ul>
            <li v-for="(task, index) in tasks" :key="index"> {{ task }}</li>
        </ul>
        <p><button @click="logout">Sair</button></p>
    </div>
</template>
<script setup>
import { ref, defineEmits, defineProps } from 'vue';
const tasks = ref([]);
tasks.value.push('Estudar Vue.js');
tasks.value.push('Estudar Vue Router');
const emits = defineEmits(['authenticated']);
const props = defineProps({ color: String });
const logout = () => {
    emits('authenticated', false);
};
</script>