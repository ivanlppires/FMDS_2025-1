<!-- eslint-disable -->
<template>
  <v-app>
    <v-main>
      <v-toolbar>
        <v-toolbar-title>SysGP - Sistema de Gerenciamento de Produtos</v-toolbar-title>
        <v-spacer />
        <v-btn @click="$router.push('/produtos/novo')">Novo Produto</v-btn>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col v-for="product in products" :key="product.id">
            <v-card class="mx-auto" elevation="2" width="344">
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-text>{{ product.price || "Sem preço" }}</v-card-text>
              <v-card-actions>
                <v-btn>Editar</v-btn>
                <v-btn @click="remove(product.id)">Excluir</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  const products = ref([]);
  const fetchProducts = async () => {
    const result = await fetch('http://localhost:5000/products');
    const data = await result.json();
    products.value = data;
  }
  const remove = async (id) => {
    const result = await fetch('http://localhost:5000/products/' + id, { method: 'DELETE' });
    if(!result) console.log(result);
    else fetchProducts();
  }
  onMounted(() => {
    fetchProducts();
  });


</script>
