import { reactive, ref, useContext } from '@nuxtjs/composition-api'
import { Article, Tag } from '@/types'


type State = {
  articleList: Article[]
  articleCount: number
}

export default function useArticleList() {
  const { $repository } = useContext()

  const state = reactive<State>({
    articleList: [],
    articleCount: 0,
  })

  const getArticleList = async () => {
    const data = await $repository.article.getArticleList()
    
    state.articleList = data
    state.articleCount = data.length
  }


  return {
    state,
    getArticleList,
  }
}
