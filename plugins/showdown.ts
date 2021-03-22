import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown,{
    // set default flavor of showdown
    flavor: 'original',
    // set default options of showdown (will override the flavor options)
    options: {
      emoji: false,
    },
  })