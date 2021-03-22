import { Article } from '@/types/'
type State = {
  articleList: Article[] | null
  articleCount: number
  loading: Boolean
}

export const state = (): State => ({
  articleList: null,
  articleCount: 0,
  loading: false,
})

export const actions = {
  async getArticleList(context: any) {
      let _this: any = this
      context.commit('setLoading', true)
      const data = await _this.$repository.article.getArticleList()
      // context.mutation.articleList = data
      context.commit('setArticleList', data)
      context.commit('setLoading', false)
  },
  async getArticleListByID(context: any, id: String) {
    if (context.state.articleList === null) {
      await context.dispatch('getArticleList')
    }
  },
}

export const mutations = {
  setArticleList(state: State, data: Article[]) {
    state.articleList = data
  },
  setLoading(state: State, data: boolean) {
    state.loading = data
  },
}
