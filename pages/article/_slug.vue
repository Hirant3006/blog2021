<template>
  <div class="mx-auto max-w-2xl text-white">
    <Logo class="pt-12" :isDetail="true" />
    <template v-if="article != null">
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
      <span class="text-sm mb-1 block"
        >{{ $globalFunc.formatTime(article.created_at) }} ☕ {{$globalFunc.countWord(article.content)}} min read
      </span>

      <VueShowdown
        class="mt-10 markdown"
        :markdown="article.content"
        flavor="github"
        :options="{ emoji: true }"
        id="markdown"
      />
    </template>

    <Logo class="mt-20 pb-20" :isFooter="true" :isDetail="true" />

    <!-- <article v-html="$md.render(data.fields.content)"></article> -->
  </div>
</template>

<script lang="ts">
import { useArticleSlug } from '@/compositions'
import {
  computed,
  toRef,
  toRefs,
  useFetch,
  useContext,
} from '@nuxtjs/composition-api'

export default {
  data() {
    return {}
  },
  components: {},
  setup() {
    const { route } = useContext()
    let slug = route.value.params.slug.replace(/-/g, ' ')

    // slug = slug.replaceAll('-',' ')

    const { state: articleState, getArticle } = useArticleSlug()

    const fetchData = async () => {
      await getArticle(slug)
      // console.log({data})
    }

    const { fetchState } = useFetch(() => fetchData())

    return {
      fetchData,
      fetchState,
      ...toRefs(articleState),
    }
  },
}
</script>

<style lang='scss'>
#markdown {
  a {
    color: #FFCBCB;
    font-weight: 600;
    text-decoration: underline;
  }
  img {
    margin: 20px auto;
  }
}
</style>
