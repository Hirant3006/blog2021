import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  Article,
  Author,
  Tag,
  ResponseType,
  OptionalPick,
  ResponseTypes,
  CustomErrors,
} from '@/types'

type Slug = Article['slug']
type UserName = Author['username']
// type FeedArticleListRequest = {
//   limit?: number
//   offset?: number
// }
// export type CreateArticleRequest = Pick<
//   Article,
//   'title' | 'description' | 'body'
// > &
//   OptionalPick<Article, 'tagList'>
// export type UpdateArticlePayload = Partial<CreateArticleRequest>
// export type UpdateArticleRequest = {
//   payload: UpdateArticlePayload
//   slug: Slug
// }

// export interface ArticleListRequest extends FeedArticleListRequest {
//   tag?: Tag
//   author?: UserName
//   favorited?: UserName
// }

type ArticleResponse = ResponseType<'article', Article>
type ArticleListResponse = ResponseTypes<{
  articles: Article[]
  articlesCount: number
}>

export const articleRepository = (axios: NuxtAxiosInstance) => ({
  getArticle(slug: Slug): ArticleResponse {
    return axios.$get(`/posts`,{
      params:{
        slug
      }
    })
  },
  getArticleList(
    // {
    // tag,
    // author,
    // favorited,
    // limit = LIMIT_LIST_ITEM,
    // offset = 0,
  // }: ArticleListRequest = {}
  ): ArticleListResponse {
    const defaultParam = {
      // ...(tag && { tag }),
      // ...(author && { author }),
      // ...(favorited && { favorited }),
    }

    return axios.$get('/posts', {
    })
  },
})

export type ArticleRepository = ReturnType<typeof articleRepository>
