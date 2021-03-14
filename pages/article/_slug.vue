<template>
  <div class="mx-auto max-w-2xl text-white">
    <!-- <Logo class="pt-12" :isDetail="true" /> -->
    <!-- <span
      class="mt-8 font-title min-w-2xl block mb-0.5 text-white text-4xl font-black content-center"
      >{{ data.fields.title }}</span
    >
    <div>
      <div
        class="inline-block mr-2 text-xs"
        v-for="(item, index) in data.fields.tag"
        :key="index"
      >
        <span class="underline text-xs"> #{{ item }} </span>
      </div>
    </div> -->
    <!-- <span class="text-sm mb-1 block">{{formatTime(data.sys.createdAt)}} ☕ 1 min read </span> -->
    <!-- <span class="text-xs mb-1 block">{{
      $globalFunc.formatTime(data.sys.createdAt)
    }}</span> -->
    
    <!-- <article v-html="$md.render(data.fields.content)"></article> -->

  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
    }
  },
  head: {
  },
  computed: {
  },
  methods: {

  },
}
</script>