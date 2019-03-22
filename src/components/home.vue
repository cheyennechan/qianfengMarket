<template>
  <div>
  	<router-view />
		<ul>
			<li><router-link to="/home/index">首页</router-link></li>
			<li><router-link to="/home/classify">分类</router-link></li>
			<li><router-link to="/home/cart">购物车</router-link></li>
			<li><router-link to="/home/user"><i class="fa fa-user-o"></i></router-link></li>
		</ul>
  </div>
</template>

<script>

</script>
<style scoped>

	ul{display: flex;position: fixed;bottom: 0;justify-content: space-around;list-style: none;width: 100%;padding: 0;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

