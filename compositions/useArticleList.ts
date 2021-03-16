import { reactive, ref, useContext } from '@nuxtjs/composition-api'
import { Article, Tag } from '@/types'


type State = {
  articleList: Article[]
  articleCount: number
}

export default function useArticleList() {
  const context = useContext()
  console.log({context})
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

  // const getFeedArticleList = async (offset = 0) => {
  //   const {
  //     articles,
  //     articlesCount,
  //   } = await $repository.article.getFeedArticleList({ offset })

  //   state.articleList = articles
  //   state.articleCount = articlesCount
  // }

  // const getArticleListByTag = async (tag: Tag) => {
  //   const {
  //     articles,
  //     articlesCount,
  //   } = await $repository.article.getArticleList({ tag })

  //   state.articleList = articles
  //   state.articleCount = articlesCount
  // }

  // const getArticleListByFeed = async (listType: FeedType) => {
  //   const fetchArticleBy = {
  //     GLOBAL: getArticleList,
  //     YOUR: getFeedArticleList,
  //   }

  //   await fetchArticleBy[listType]()

  //   setFeedType(listType)
  // }

  // const toggleFavoriteArticleByList = async (
  //   { slug, favorited }: Pick<Article, 'slug' | 'favorited'>,
  //   articleIndex: number
  // ) => {
  //   const response = await toggleFavoriteArticle({ slug, favorited })

  //   if (response.article) {
  //     state.articleList = [
  //       ...state.articleList.slice(0, articleIndex),
  //       response.article,
  //       ...state.articleList.slice(articleIndex + 1),
  //     ]
  //   }
  // }

  return {
    state,
    getArticleList,
    // feedType,
    // getFeedArticleList,
    // getArticleListByTag,
    // getArticleListByFeed,
    // toggleFavoriteArticleByList,
    // setFeedType,
  }
}
