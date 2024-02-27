<script setup lang="ts">
import { type UserInterface } from '@/models/ProductInterface';

const { product, id } = defineProps<{ product: UserInterface; id: number }>();
const emit = defineEmits();
</script>
<template>
  <div class="container" :key="product.id">
    <img :src="`https://robohash.org/${id}?set=set2&size=180x180`" />
    <h3>{{ product.name }}</h3>
    <slot name="footer" :prd="product"></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  border: 1px solid #ccc;
  text-align: center;
  img {
    width: 180px;
    height: 180px;
  }
}
</style>
