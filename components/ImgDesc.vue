<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "free",
  },
  word: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});

const imgInfo = {
  search: "/search-not-found",
  free: "/frame",
  passport: "/passport",
};
const setScreenSize = () => {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(22, vh);
};

const getSrc = (path) => {
  return {
    src: `${path}-2x.webp`,
    srcset: `${path}-2x.webp 2x, ${path}-3x.webp 3x `,
  };
};
onMounted(() => {
  setScreenSize();
});
</script>

<template>
  <div :class="`wrap ${type}`">
    <div>
      <img
        :src="getSrc(imgInfo[props.type]).src"
        :srcset="getSrc(imgInfo[props.type]).srcset"
      />
    </div>

    <div class="title">
      <span> {{ props.word }}</span>
    </div>
    <div class="subTitle">{{ props.subTitle }}33</div>

    <div class="desc">
      {{ props.desc }}

      <slot name="desc" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
  height: calc(var(--vh, 1vh) * 100 - 4.8rem);
  //   height: calc(100vh - 4.8rem);

  .image {
    img {
      width: 20rem;
      height: 20rem;
    }
  }
  .title {
    color: var(--brand80);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }
  .subTitle {
    color: var(--gray100);
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  .desc {
    color: var(--gray60);
    font-size: 1.4rem;
    text-align: center;
  }
  &.free,
  &.passport {
    .subTitle {
      font-size: 2.4rem;
      font-weight: 600;
    }
    .desc {
      color: var(--gray80);
      font-size: 1.5rem;
    }
  }
  &.free {
    .desc {
      color: var(--gray70);
    }
  }
}
</style>
