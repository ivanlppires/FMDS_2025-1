<template>
  <div id="login" v-if="!isAuthenticated">
    <h1>Autenticação</h1>
    <input type="text" placeholder="Usuário">
    <input type="password" placeholder="Senha">
    <button>Entrar</button>
  </div>
  <div id="todolist" v-else>
    <h1>Lista de Tarefas</h1>
    <input type="text" placeholder="Nova tarefa">
    <button>Adicionar</button>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  const isAuthenticated = ref(false);
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