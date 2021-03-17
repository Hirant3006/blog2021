import { Plugin } from '@nuxt/types'
import moment from 'moment'

const globalFunc: Plugin = (ctx, inject) => {
  inject('globalFunc', {
    formatTime(date: Date) {
      return moment(date).format('MMMM DD, YYYY')
    },
  })
}

export default globalFunc
