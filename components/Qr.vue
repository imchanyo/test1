<script setup>
import { QrcodeStream } from "vue-qrcode-reader";

const trackFunctionOptions = [
  { text: "nothing (default)", value: undefined },
  { text: "outline", value: paintOutline },
  { text: "centered text", value: paintCenterText },
  { text: "bounding box", value: paintBoundingBox },
];

function paintBoundingBox(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: { x, y, width, height },
    } = detectedCode;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#007bff";
    ctx.strokeRect(x, y, width, height);
  }
}
function paintCenterText(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const { boundingBox, rawValue } = detectedCode;

    const centerX = boundingBox.x + boundingBox.width / 2;
    const centerY = boundingBox.y + boundingBox.height / 2;

    const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width);

    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#35495e";
    ctx.strokeText(detectedCode.rawValue, centerX, centerY);

    ctx.fillStyle = "#5cb984";
    ctx.fillText(rawValue, centerX, centerY);
  }
}
const trackFunctionSelected = ref(trackFunctionOptions[1]);

/* track */

function paintOutline(detectedCodes, ctx) {
  for (const detectedCode of detectedCodes) {
    const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

    ctx.strokeStyle = "red";

    ctx.beginPath();
    ctx.moveTo(firstPoint.x, firstPoint.y);
    for (const { x, y } of otherPoints) {
      ctx.lineTo(x, y);
    }
    ctx.lineTo(firstPoint.x, firstPoint.y);
    ctx.closePath();
    ctx.stroke();
  }
}

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

  //   data.paused = true;
  //   await timeout(500);
  //   data.paused = false;
};

// const timeout = (ms) => {
//   return new Promise((resolve) => {
//     window.setTimeout(resolve, ms);
//   });
// };
</script>
<template>
  <div>
    <p>
      Detected codes are visually highlighted in real-time. Use the following
      dropdown to change the flavor:

      <select v-model="trackFunctionSelected">
        <option
          v-for="option in trackFunctionOptions"
          :key="option.text"
          :value="option"
        >
          {{ option.text }}
        </option>
      </select>
    </p>

    <p class="decode-result">
      Last result: <b>{{ data.result }}</b>
    </p>
    <div v-if="active"></div>

    <QrcodeStream
      v-else
      :track="trackFunctionSelected.value"
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
