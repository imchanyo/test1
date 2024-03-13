<script setup lang="ts">
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div>
    <NuxtLink to="/products">VueUse Pratice</NuxtLink>
    <NuxtLink to="/pinia">pinia Pratice</NuxtLink>
    <Qr />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  gap: 20px;
}
</style>
