<script setup lang="ts">
const props = defineProps(['data']);
</script>
<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200;
  margin-inline: 'auto';
  padding: 20;
  .box {
    margin-bottom: 4rem;
    text-align: center;
    display: grid;
    grid-template-columns: '1fr 1fr 1fr 1fr';
    gap: 20;
  }
}
</style>
