<template>
  <h1>
    <p>Olá {{ nome }}, você tem {{ idade }} anos!</p>
  </h1>

  <!-- v-bind liga o script com o template, a versão reduzida é : -->
  <h1 :style="`color: ${color}`" >Fonte da juventude:</h1>
  
  <!-- V-ON liga o template com o script. Versão reduzida: @ -->
  <button @click="rejuvenescer">Aperte aqui</button>
  
  <!-- 2way data-bind, ou seja, V-Model liga o script com o template e o template com o script -->
  <input type="text" v-model="nome" />  {{  msg }}

  <!-- V-FOR: diretiva do vue para percorrer elementos  -->
  <ul>
    <li v-for="(fruta, index) in frutas" :key="index"> {{  fruta  }}</li>
  </ul>

</template>

<script setup>

// ref é uma função que cria uma variável reativa
// computed é uma função que cria uma variável computada
// watch é uma função que cria um observador

import { ref, computed, watch } from 'vue';

// REF
const nome = ref("Ivan Pires");
const anoNascimento = ref(1983);
const rejuvenescer = () => {
  anoNascimento.value += 10;
  color.value = "orange";
};
const color = ref("blue");

// COMPUTED
const idade = computed( () => {
  return new Date().getFullYear() - anoNascimento.value;
});
const msg = ref("");

// WATCH
watch( nome, (novovalor, valorantigo ) => {
  if(novovalor.length < 3){
    msg.value = "Nome muito curto";
  } else {
    msg.value = "";
  }
});

const frutas = ref(["banana", "maçã", "uva"]);
const frutasCitricas = "laranja, limão, tangerina";
frutas.value = [...frutas.value, ...frutasCitricas.split(", ")];

</script>

<style>
p {
  color: red;
}
</style>