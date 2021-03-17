import { reactive, ref, useContext } from '@nuxtjs/composition-api'
import {Article, Tag} from '@/types'

type State = {
    article: Article | null
}

export default function useArticleSlug() {
    // const context 
    const { $repository } = useContext()
    
    const state = reactive<State>({
        article: null
    })

    const getArticle = async (slug: Article['slug']) => {
        const [data] = await $repository.article.getArticle(slug)

        state.article = data
    }

    return {
        state,
        getArticle
    }
}