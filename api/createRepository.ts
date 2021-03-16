import { Context } from '@nuxt/types'
import {
  articleRepository,
  ArticleRepository,
} from '@/api'

export type Repository = {
  article: ArticleRepository
}

/**
 * @see https://axios.nuxtjs.org
 * @see https://github.com/gothinkster/realworld/tree/3155494efe68432772157de38a90c49b3698897f/api
 */
const createRepository = ({ app, $axios, redirect }: Context): Repository => {
  $axios.onError((error) => {
    if (!error.response) {
      return
    }

    const code = error.response.status

    // if (code === ErrorType.Unprocessable) {
    //   return Promise.reject(error.response.data.errors)
    // }

    // if (code === ErrorType.Unauthorized) {
    //   redirect('/login')

    //   return
    // }

    // if (code === ErrorType.Forbidden) {
    //   app?.router?.back()

    //   return
    // }

    // if (code === ErrorType.NotFound) {
    //   redirect('/')
    // }
  })

  return {
    article: articleRepository($axios),
    // comment: commentRepository($axios),
    // profile: profileRepository($axios),
    // tag: tagRepository($axios),
    // user: userRepository($axios),
  }
}

export default createRepository
