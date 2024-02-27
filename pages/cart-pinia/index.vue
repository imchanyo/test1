<script setup lang="ts">
import { useMyCartpiniaStore } from '@/store/cartpinia';

const store = useMyCartpiniaStore();
</script>
<template>
  <div class="container">
    <NuxtLink to="/pinia">product</NuxtLink>
    <div class="box">
      <ProductItem
        v-for="(product, i) in store.cartStore"
        :product="product"
        :id="product.id"
      >
        <template #footer="{ prd }">
          <button @click="() => store.removeCart(prd.id)">삭제</button>
        </template>
      </ProductItem>
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
