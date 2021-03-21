import { Plugin } from '@nuxt/types'
import moment from 'moment'

const wordsperminute = 233;

const globalFunctions = {
  formatTime(date: Date) {
    return moment(new Date(date)).format('MMMM DD, YYYY')
  },
  countWord(content: String) {
    const words = content.split(' ').length
    const readingtime = words / wordsperminute;
    return readingtime.toFixed(0)
  }
}


const globalFunc: Plugin = (ctx, inject) => {
  inject('globalFunc', globalFunctions)
}

export default globalFunc
