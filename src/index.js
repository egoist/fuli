import Vue from 'vue'
import touch from 'vue-touch'
import app from './app'

if (__DEV__) {
	Vue.config.debug = true
}

Vue.use(touch)

new Vue({
	el: 'body',
	components: {app}
})
