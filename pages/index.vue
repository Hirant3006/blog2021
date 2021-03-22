<template>
  <div class="mx-auto max-w-2xl p">
    <Logo class="pt-12" />
    <div class="flex mt-20 flex-col">
      <div v-if="loadingArticles">Loading...</div>
      <template v-else>
        <SmallSection
          class="mb-8"
          v-for="(item, index) in articles"
          :data="item"
          :key="index"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, toRef, toRefs, useFetch } from '@nuxtjs/composition-api'
import { useArticleList } from '@/compositions'
import { Article } from '@/types/'

export default {
  name: 'Main',
  data() {
    return {}
  },
  computed: {
    articles(): Article[] {
      const _this: any = this
      return _this.$store.state.article.articleList
    },
    loadingArticles(): Boolean {
      const _this: any = this
      return _this.$store.state.article.loading
    },
  },
  mounted() {},
  setup() {
    const { state: articleListState, getArticleList } = useArticleList()

    const fetchData = async () => {
      await getArticleList()
      // console.log({data})
    }

    const { fetchState } = useFetch(() => fetchData())

    return {
      fetchData,
      fetchState,
      ...toRefs(articleListState),
    }
  },
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
