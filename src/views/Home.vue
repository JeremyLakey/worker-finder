<template>
  <div class="home">
	<div class="inputs">
		<h3>Search name: </h3>
		<input v-model="searchName"/>
	</div>
	<div class="inputs">
		<h3>Search job: </h3>
		<input v-model="searchJob"/>
	</div>
	<WorkerList :workers="workers"/>
  </div>
</template>

<script>
import WorkerList from "../components/WorkerList"
export default {
  name: "Home",
  components: {
    WorkerList
  },
  data() {
    return {
	searchName: '',
        searchJob: '',
    }
  },
  computed: {
    workers() {
      return this.$root.$data.workers.filter(product => product.first_name.toLowerCase().search(this.searchName.toLowerCase()) >= 0).filter(product => product.job.toLowerCase().search(this.searchJob.toLowerCase()) >= 0);
    }
  },
}
</script>


<style scope>

h3 {
  margin: 0px;
  margin-right:10px;
}

.inputs {
  display: flex;
  justify-content: center;
  margin: 30px;
}
</style>


