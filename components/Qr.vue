<script setup>
import { QrcodeStream } from "vue-qrcode-reader";

const data = reactive({
  paused: false,
  result: "",
  showScanConfirmation: false,
  camera: "off",
});
const active = ref(false);

const onCameraOn = () => {
  data.showScanConfirmation = false;
};

const onCameraOff = () => {
  data.showScanConfirmation = true;
};

const onError = (error) => {
  console.error(error);
};
const activate = async () => {
  active.value = true;
  setTimeout(() => {
    active.value = false;
  }, 50);
};

const onDecode = async () => {
  data.camera = `off`;
  //Validate code
  data.camera = `auto`;
  activate();
};
const onDetect = async (detectedCodes) => {
  data.result = JSON.stringify(detectedCodes.map((code) => code.rawValue));

  data.paused = true;
  await timeout(500);
  data.paused = false;
};

const timeout = (ms) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
};
</script>
<template>
  <div>
    <p class="decode-result">
      Last result: <b>{{ data.result }}</b>
    </p>
    <div v-if="active"></div>

    <QrcodeStream
      v-else
      :paused="data.paused"
      @decode="onDecode"
      @detect="onDetect"
      @camera-on="onCameraOn"
      @camera-off="onCameraOff"
      @error="onError"
    >
      <div v-show="data.showScanConfirmation" class="scan-confirmation">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/10/19/check-303494_1280.png"
          alt="Checkmark"
          width="128"
        />
      </div>
    </QrcodeStream>
  </div>
</template>

<style scoped>
.scan-confirmation {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>
