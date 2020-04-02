<template>
  <div id="splash-video" class="block relative flex items-center w-full h-screen overflow-hidden">
    <video autoplay muted loop>
      <source src="rain.mp4" type="video/mp4">
    </video>
    <div id="splash-lines" class="block absolute z-200 h-full w-full">
      <svg
        class="line-01 absolute h-screen w-auto"
        x="0px"
        y="0px"
        width="15px"
        height="1080px"
        viewBox="0 0 15 1080"
      >
        <g>
          <g>
            <line
              opacity="0.5"
              fill="none"
              stroke="#D4145A"
              stroke-miterlimit="10"
              x1="15"
              y1="185.5"
              x2="0"
              y2="185.5"
            />
            <line
              opacity="0.5"
              fill="none"
              stroke="#D4145A"
              stroke-miterlimit="10"
              x1="15"
              y1="895.5"
              x2="0"
              y2="895.5"
            />
          </g>
          <line
            opacity="0.5"
            fill="none"
            stroke="#D4145A"
            stroke-miterlimit="10"
            x1="7.5"
            y1="0"
            x2="7.5"
            y2="1080"
          />
        </g>
      </svg>
      <svg
        class="line-02 absolute h-screen w-auto"
        x="0px"
        y="0px"
        width="15px"
        height="1080px"
        viewBox="0 0 15 1080"
      >
        <g>
          <g>
            <line
              opacity="0.5"
              fill="none"
              stroke="#D4145A"
              stroke-miterlimit="10"
              x1="15"
              y1="185.5"
              x2="0"
              y2="185.5"
            />
            <line
              opacity="0.5"
              fill="none"
              stroke="#D4145A"
              stroke-miterlimit="10"
              x1="15"
              y1="895.5"
              x2="0"
              y2="895.5"
            />
          </g>
          <line
            opacity="0.5"
            fill="none"
            stroke="#D4145A"
            stroke-miterlimit="10"
            x1="7.5"
            y1="0"
            x2="7.5"
            y2="1080"
          />
        </g>
      </svg>
    </div>
    <div class="block absolute z-300 h-full w-full">
      <Slider />
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
export default {
  components: {
    Slider
  }
}
</script>

<style scoped>
.line-01 {
  left: 30%;
}
.line-02 {
  left: 70%;
}
video {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.50;
  transform: scale(3.5);
  height: 100%;
  width:auto;
}
@media only screen and (min-width: 1024px) {
  video {
    transform: scale(2);
  }
}
@media only screen and (min-width: 1300px) {
  video {
    transform: scale(1.5);
  }
}
</style>
