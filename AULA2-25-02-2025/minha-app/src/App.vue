<template>
    <h1>TODO LIST</h1>
    <input type="text" placeholder="Digite uma tarefa" v-model="novaTarefa" />
    <button @click="adicionar">Adicionar</button>
    <ul>
        <li v-for="tarefa in tarefas" :key="tarefa.id"> {{ tarefa.texto }}</li>
    </ul>
    <!-- DESAFIO 2: FAZER O UPDATE, DELETE deste TODOLIST -->
</template>

<script setup>
import { ref } from 'vue';
const tarefas = ref([]);
const novaTarefa = ref('');

const adicionar = () => {
    // com spread operator
    //tarefas.value = [...tarefas.value, { id: Date.now(), texto: novaTarefa.value, feita: false }];
    
    // com push
    tarefas.value.push(
        {
            id: Date.now(),
            texto: novaTarefa.value,
            feita: false
        }
    );

    novaTarefa.value = '';
}


</script>

<style></style>