<!-- eslint-disable -->
<template>
    <v-card class="mx-auto" max-width="400">
        <v-card-title>Contato</v-card-title>
        <v-card-text>
            <v-form fast-fail @submit.prevent>
                <v-text-field v-model="firstName" :rules="firstNameRules" label="Nome Completo"></v-text-field>
                <v-textarea :rules="messageRules" v-model="message" label="Mensagem"></v-textarea>
                <v-checkbox :rules="acceptTermRules" v-model="acceptTerm" label="Aceito os termos e condições"></v-checkbox>
                <v-btn class="mt-2" type="submit" block>Enviar</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'
const firstName = ref('');
const firstNameRules = ref([
    value => {
        if (value.length >= 3) return true
        return 'Preencha o mínimo de 3 caracteres.'
    },
]);
const message = ref('');
const messageRules = ref([
    value => {
        if (value.length >= 10) return true
        return 'Preencha o mínimo de 10 caracteres.'
    },
]);

const acceptTerm = ref(false);
const acceptTermRules = ref([
    value => {
        if (value) return true
        return 'Você deve aceitar os termos e condições.'
    },
]);

</script>