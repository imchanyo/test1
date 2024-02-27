<script setup lang="ts">
import { useMyCartStore } from '@/store/cart';
const { removeCart, cartStore } = useMyCartStore();
</script>
<template>
  <div class="container">
    <NuxtLink to="/products">product</NuxtLink>
    <div class="box">
      <ProductItem
        v-for="(product, i) in cartStore"
        :product="product"
        :id="product.id"
      >
        <template #footer="{ prd }">
          <button @click="() => removeCart(prd.id)">삭제</button>
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
