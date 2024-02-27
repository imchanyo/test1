<script setup lang="ts">
import { type UserInterface } from '@/models/ProductInterface';
import { useMyCartStore } from '@/store/cart';

const { data } = await useFetch<UserInterface[]>(
  'https://jsonplaceholder.typicode.com/users'
);

const { addCart } = useMyCartStore();
</script>

<template>
  <div class="container">
    <NuxtLink to="/cart">cart</NuxtLink>
    <div class="box">
      <div v-for="(product, i) in data" :key="product.id">
        <ProductItem :product="product" :key="i" :id="product.id">
          <template #footer="{ prd }">
            <button @click="() => addCart(prd)">담기</button>
          </template>
        </ProductItem>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin-inline: auto;
  padding: 20px;
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
}
</style>
