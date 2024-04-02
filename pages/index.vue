<script setup lang="ts">
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div>
    <Header />
    <!-- <NuxtLink to="/products">VueUse Pratice</NuxtLink>
    <NuxtLink to="/pinia">pinia Pratice</NuxtLink> -->
    <ImgDesc
      type="free"
      :sub-title="`PIN번호 5회 오류로 \n재설정이 필요해요!`"
      :desc="`기존 PIN 번호를 더 이상 사용할 수 없으며, \n본인 확인 후 PIN 번호를 재설정해야 합니다.`"
    />
  </div>
</template>

<style lang="scss">
$screenSizes: 280, 320, 360, 375, 393, 414, 450;
@each $size in $screenSizes {
  @media (min-width: #{$size}px) {
    html {
      font-size: (calc($size / 375) * 62.5) * 1%;
    }
  }
}
body {
  margin: 0;
}
</style>
