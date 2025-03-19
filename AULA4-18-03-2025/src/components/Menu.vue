<!-- eslint-disable -->
<template>
    <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="john@google.com"
            title="John Leider" />
    </v-list>

    <v-divider />

    <v-list>
        <v-list-item v-for="item in items" :key="item.title" link
         :prepend-icon="item.icon"
         :title="item.title"
         :to="item.link" />
    </v-list>

</template>
<script setup>
import { ref } from 'vue'

const items = ref([
    { title: 'Início', icon: 'mdi-home', link: '/' },
    { title: 'Clientes', icon: 'mdi-account', link: '/clientes' },
    { title: 'Relatórios', icon: 'mdi-file', link: '/relatorios' },
    { title: 'Contato', icon: 'mdi-email', link: '/contato' },
    { title: 'Sair', icon: 'mdi-logout', link: '/sair' },
    { title: 'Livros', icon: 'mdi-book', link: '/livros' }
]);
</script>