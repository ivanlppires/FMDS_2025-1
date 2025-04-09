<!-- eslint-disable -->
<template>
    <v-list>
        <v-list-item-group>
            <v-list-item link to="/">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/dashboard">
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/login">
                <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/clients">
                <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
        <v-list-item link to="/products">
            <v-list-item-title>Produtos</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/services">
            <v-list-item-title>Serviços</v-list-item-title>
        </v-list-item>
    </v-list>
</template>