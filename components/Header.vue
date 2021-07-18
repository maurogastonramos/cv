<template>
  <header class="relative">
    <div class="overflow-hidden">
      <img
        class="absolute img-1 animation-options"
        width="400"
        src="@/assets/heart-particle-3.png"
        alt=""
      />
      <img
        class="absolute img-2 animation-options"
        width="400"
        src="@/assets/heart-particle-2.png"
        alt=""
      />
      <img
        class="absolute img-3 animation-options"
        width="400"
        src="@/assets/heart-particle-3.png"
        alt=""
      />
      <img
        class="absolute img-4 animation-options"
        width="400"
        src="@/assets/heart-particle-2.png"
        alt=""
      />
    </div>

    <div
      class="bg-red-200 h-40 border-b-8 border-pink-100 bg-flower bg-cover bg-center rounded-b-md"
    >
      <div
        class="rounded-full relative top-20 mx-auto w-40 h-40 bg-profile bg-cover border-8 border-pink-100 transition-transform duration-500 transform hover:scale-150"
      ></div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
@keyframes breathe {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rightSide {
  0% {
    top: -150px;
    right: 0;
  }
  100% {
    top: 20px;
    right: 20%;
  }
}
@keyframes leftSide {
  0% {
    top: -150px;
    right: 50%;
  }
  100% {
    top: 20px;
    right: 70%;
  }
}
.img-1 {
  animation: rightSide 10s infinite, breathe 10s infinite;
}
.img-2 {
  animation: rightSide 7s infinite, breathe 7s infinite;
  animation-delay: 7s;
}

.img-3 {
  animation: leftSide 8s infinite, breathe 8s infinite;
  animation-delay: 8s;
}
.img-4 {
  animation: leftSide 10s infinite, breathe 10s infinite;
}
.animation-options {
  animation-fill-mode: both;
  animation-timing-function: linear;
}
</style>