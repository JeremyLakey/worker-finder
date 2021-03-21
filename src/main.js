import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fakeData from './fakeData.js'

Vue.config.productionTip = false

let data = {
  workers: fakeData,
  currentId: 13,
  workerFound: false,
  addWorker(email, first_name, last_name, job, description) {
      this.workers.push({
        id: this.currentId.toString(),
        email: email,
	first_name: first_name,
	last_name: last_name,
	job: job,
	description: description,
	image: "/base.png"
      });
      this.currentId++;
    }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
