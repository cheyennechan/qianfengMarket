<template>
  <div>
    <router-view/>
    <ul>
      <li>
        <router-link to="/home/index">
			<i class="fa fa-home" aria-hidden="true"></i>
			<p>首页</p>
		</router-link>
      </li>
      <li>
        <router-link to="/home/classify">
			<i class="fa fa-th-large" aria-hidden="true"></i>
			<p>分类</p>
		</router-link>
      </li>
      <li>
        <router-link to="/home/cart">
			<i class="fa fa-shopping-cart" aria-hidden="true"></i>
			<p>购物车</p>
		</router-link>
      </li>
      <li>
        <router-link to="/home/user">
        	<i class="fa fa-user-o"></i>
			<p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>
<style scoped lang="scss">
ul {
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  padding: 0;
  text-align: center;
  background-color: #2691e1;
  z-index: 1;
      padding-top: 2%;
    padding-bottom: 1%;
  li{
	  width: 25%;
	  font-size: .63rem;
	  i{
		  font-size: 1.41rem;
		  margin-bottom: .25rem;
	  }
	  a{
 		 color: #fff;
	  }
  }
  li:hover a{
	  color: #ffe400;
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

