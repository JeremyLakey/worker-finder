<template>
<div id='main'>
<div id='container'>
  
  <form v-if="notRegistered" id='inputs' @submit.prevent="registerWorker">
	<h1>Register a Worker</h1>
	<div class='input'>
		<label>Email: </label>
		<input type="text" v-model="email">
	</div>
	<br/>
	
	<div class='input'>
		<label>First name: </label>
		<input type="text" id="first_name" v-model="first_name">
	</div>
	<br/>

	<div class='input'>
		<label>Last name: </label>
		<input type="text" id="last_name" v-model="last_name">
	</div>
	<br/>

	<div class='input'>
		<label>Job: </label>
		<input type="text" id="job" v-model="job">
	</div>
	<br/>

	<div class='input'>
		<label style="display: flex; flex:center">Description: </label>
		<textarea id="description" v-model="description"></textarea>
	</div>
	<br/>

	<button type="submit">Register</button>
  </form>
  <div v-else>
	<h1>Thanks for Registering</h1>
  </div>
</div>
</div>
</template>


<script>
export default {
  name: 'Register',
  data() {
    return {
	notRegistered: true,
	email: "",
	first_name: "",
	last_name: "",
	job: "",
	description: ""
    }
  },
  methods: {
    registerWorker() {
	this.$root.$data.addWorker(this.email, this.first_name, this.last_name, this.job, this.description);
	this.notRegistered = false;
    }
  }
}
</script>

<style scope>

#main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  margin:10px;
}

.input input {
  resize: none;
}

.input input[type=text]:focus {
  background-color: lightblue;
}

#description {
  height:100px;
  width: 100%;
}
</style>