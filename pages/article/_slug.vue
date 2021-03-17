<template>
  <div class="mx-auto max-w-2xl text-white">
    <Logo class="pt-12" :isDetail="true" />
    <span
      class="mt-8 font-title min-w-2xl block mb-0.5 text-white text-4xl font-black content-center"
      >{{ article.name }}</span
    >
    <div>
      <div
        class="inline-block mr-2 text-xs"
        v-for="(item, index) in article.categories"
        :key="index"
      >
        <span class="underline text-xs"> #{{ item.name }} </span>
      </div>
    </div>
    <span class="text-sm mb-1 block">{{$globalFunc.formatTime(article.created_at)}} ☕ 1 min read </span>
    <span class="text-xs mb-1 block">{{
      $globalFunc.formatTime(article.created_at)
    }}</span>

    <!-- <article v-html="$md.render(data.fields.content)"></article> -->
  </div>
</template>

<script lang="ts">
import { useArticleSlug } from '@/compositions'
import {
  computed,
  defineComponent,
  toRef,
  toRefs,
  useFetch,
  useContext,
} from '@nuxtjs/composition-api'

export default {
  data() {
    return {}
  },
  setup() {
    const { route } = useContext()
    const slug = route.value.params.slug

    const { state: articleState, getArticle } = useArticleSlug()

    const fetchData = async () => {
      await getArticle(slug)
      // console.log({data})
    }

    const { fetchState } = useFetch(() => fetchData())
    return {
      fetchData,
      fetchState,
      ...toRefs(articleState)
    }
  },
}
</script>
