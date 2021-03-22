import { Article } from '@/types/'
import {articleRepository} from '@/api/articleRepository'
type State = {
  articleList: Article[]
  articleCount: number
}

export const state = (): State => ({
  articleList: [],
  articleCount: 0,
})

export const actions = {
  async getArticleList() {
    const data = await articleRepository.getArticleList
    console.log({data})
  },
}
