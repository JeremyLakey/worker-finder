<template>
<div class="wrap">
  <div class="workers">
	<div class="worker" v-for="worker in workers" :key="worker.id">
		<router-link :to="'/worker/' + worker.id" style="'/assets'+worker.image">
			<img class="profile" :src="'/assets/1.png'">
			<h1>{{worker.first_name}}</h1>
			<h2>{{worker.job}}</h2>
		</router-link>
	</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorkerList',
  props: {
    workers: Array
  }
}
</script>

<style scoped>
.wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}

.workers{ 
  margin: 60px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.worker {
  margin: 20px;
  margin-top: 50px;
  width:auto;
  height:auto;
}

h1 {
  display: flex;
  justify-content: center;
}

h2 {
  display: flex;
  justify-content: center;
}

img {
  width: auto;
  height: auto;
  margin-left:auto;
  margin-right:auto;
}



</style>

