<template>
  <div class="flex items-center h-full w-full">
    <div class="block h-8 w-8">
      <svg
        class="block w-auto h-full"
        x="0px"
        y="0px"
        viewBox="-7.794 -4.5 270.679 234.414"
        enable-background="new -7.794 -4.5 270.679 234.414"
        xml:space="preserve"
      >
        <line
          fill="none"
          stroke-width="12"
          stroke-miterlimit="10"
          x1="224.846"
          y1="139.768"
          x2="31.14"
          y2="139.768"
        />
        <polygon
          fill="none"
          stroke-width="12"
          stroke-miterlimit="10"
          points="252.492,1.5 127.545,217.914 2.598,1.5 "
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
svg line {
  stroke: #fff;
  stroke-dasharray: 200;
  stroke-dashoffset: -400;
  animation: svg-kf-01 16s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
svg polygon {
  stroke: #fff;
  stroke-dasharray: 600;
  stroke-dashoffset: -1200;
  animation: svg-kf-02 16s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
@keyframes svg-kf-01 {
  0% {
    stroke-dashoffset: -400;
  }
  10% {
    stroke-dashoffset: 0;
  }
  90% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 400;
  }
}
@keyframes svg-kf-02 {
  0% {
    stroke-dashoffset: -1200;
  }
  10% {
    stroke-dashoffset: 0;
  }
  90% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 1200;
  }
}

</style>
