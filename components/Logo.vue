<template>
  <div :class="`flex flex-col justify-between h-auto w-285`">
    <h3
      @click="() => $router.push('/')"
      :class="`cursor-pointer mb-12 font-black leading-10 mb-3 font-title ${
        isDetail ? 'text-pink  text-3xl' : 'text-white  text-4xl'
      }`"
    >
      Hirany
    </h3>
    <div v-if="!isDetail" class="flex">
      <img class="h-12" src="~/assets/logo.png" alt="" />
      <div class="ml-3 text-left">
        <div class="flex flex-col text-white">
          <span
            >Personal blog by
            <span class="underline text-pink font-bold">Hirant</span>
            .
          </span>
          <span>Nihilne sanctum est?</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDetail: {
      default: false,
      type: Boolean,
    },
  },
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
