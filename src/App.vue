<template>
  <div id="app">
    <div id="nav">
	<router-link to="/">
		<img alt="title" src="./assets/title.png"/>
	</router-link>
    </div>
    <div id="register">
	<h2>	
		<router-link to="/" style="text-decoration:none"><span style='border:2px black solid; padding:10px;'>Home</span></router-link>
		<router-link to="/register" style="text-decoration:none"><span style='border:2px black solid; padding:10px;'>Register</span></router-link>
	</h2>	
    </div>
   
    <router-view/>

    <hr/>
    <div id='footer'>
	<h3><a href="https://github.com/personman61/worker-finder" style="text-decoration:none;">git hub</a></h3>
    </div>

  </div>
</template>

<style>



#nav {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
  height: auto;
}

#register h2{
  font-size: 18px;
  text-align: right;
  margin-right: 10%;
  margin-top: 15px;
  margin-bottom: 15px;
}

span {
  margin: 12px;
}

#footer {
  padding:50px;
}

#footer h3 {
  text-align: center;
  text-color: black;
}


</style>