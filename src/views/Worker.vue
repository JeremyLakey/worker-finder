<template>
  <div v-if="exists" class="work">
    <form id="delete" @submit.prevent="deleteWorker">
	<button type="submit">Delete Worker</button>
    </form>
    <div>
	<img :src="'/assets/' + worker.image">
    </div>
    <div class="box">
	<h1>{{worker.job}}</h1>
	<h1>{{worker.first_name}} {{worker.last_name}}</h1>
	<h4>Email: {{worker.email}}</h4>
	<p>Description: {{worker.description}}</p>
    </div>
    
  </div>
  <div v-else>
	<h1 id="bye">Worker does not exists</h1>
  </div>
</template>



<script>
export default {
  name: 'Worker',
  data() {
	return {
		worker: {},
	}
  },
  created() {
    this.worker = this.$root.$data.workers.find(worker => worker.id === (this.$route.params.id));
    if (typeof this.worker === undefined) {
	this.$root.$data.workerFound = false;
    }
    else {
	this.$root.$data.workerFound = true;
    }
  },
  methods: {
    deleteWorker() {
	let index = this.$root.$data.workers.indexOf(this.$root.$data.workers.find(worker => worker.id === (this.$route.params.id)));
	if (index < 0) {
		this.$root.$data.workerFound = false;
		return;
	}
	this.$root.$data.workers.splice(index, 1);
	this.$root.$data.workerFound = false;
    }
  },
  computed: {
    exists() {
	return this.$root.$data.workerFound;
    }
  }
}
</script>


<style scope>


.work {
  margin-top: 30px;
  display: box;
  justify-content: center;
}

.work img {
  display:block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}

.box {
  display:block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}

.box h1 {
  text-align: center;
}

.box h4 {
  text-align: center;
}

.box p {
  margin:auto;
  text-align:center;
  width: 75%
}

#delete {
  text-align:right;
  margin-right:10%;
}

#delete button {
  font-size: 20px;
}

#bye {
  text-align:center;
  margin-top:40px;
}



</style>