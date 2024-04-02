<script setup>
// const goHome = () => {
//   router.push('/')
// }
</script>

<template>
  <header>
    <div class="left">gsgsdgsd</div>

    <h1>iasds-fe-fo</h1>

    <!-- <div class="right">
      <IcoCategoryHome @click="goHome" />
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  height: 4.8rem;
  background-color: black;
}
h1 {
  flex: 1 1 auto;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--gray100);
}
</style>
