<template>
  <div class="h-auto text-primary">
    <a
      @click="
        () =>
          $router.push({
            path: data.slug ? `/article/${data.slug.replaceAll(' ', '-')}` : '/',
            params: { id: data.id },
          })
      "
      class="font-title min-w-2xl cursor-pointer block mb-0.5 text-pink text-3xl font-black content-center"
      >{{ data.name }}</a
    >
    <div>
      <div
        class="inline-block mr-2"
        v-for="(item, index) in data.categories"
        :key="index"
      >
        <span class="underline text-xs"> #{{ item.name }} </span>
      </div>
    </div>
    <!-- <span class="text-sm mb-1 block">{{formatTime(data.sys.createdAt)}} ☕ 1 min read </span> -->
    <span class="text-xs mb-1 block">{{
      $globalFunc.formatTime(data.created_at)
    }}</span>
    <span class="text-base block text-base whitespace-nowrap">{{
      data.short_description
    }}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'SmallSection',
  props: ['data'],
  computed: {
  },
  mounted() {
  },
}
</script>

<style>
.whitespace-nowrap {
  white-space: nowrap;
}
</style>