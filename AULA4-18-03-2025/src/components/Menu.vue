<!-- eslint-disable -->
<template>
    <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="john@google.com"
            title="John Leider" />
    </v-list>

    <v-divider />

    <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :prepend-icon="item.icon" :title="item.title" />
    </v-list>

</template>
<script setup>
import { ref } from 'vue'

const items = ref([
    { title: 'Início', icon: 'mdi-home' },
    { title: 'Clientes', icon: 'mdi-account' },
    { title: 'Relatórios', icon: 'mdi-file' },
    { title: 'Contato', icon: 'mdi-email' },
    { title: 'Sair', icon: 'mdi-logout' },
]);
</script>