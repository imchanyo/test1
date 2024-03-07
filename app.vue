<script setup>
const runtimeConfig = useRuntimeConfig().public;
const store = useModalStore();
const { modalState } = storeToRefs(store);

onMounted(() => {
  console.log("runtimeConfig", runtimeConfig);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Modal v-show="modalState.show" />
  </div>
</template>

<style lang="scss">
@use "assets/style";
</style>
