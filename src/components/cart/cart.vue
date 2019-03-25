<template>
	<div>
		<div class="nav">
			<span><</span>
			<span>购物车</span>
		</div>
		<div class="neirong">
			<p>盛千辉便利店</p>
		</div>
		<div class="body">
		<ul v-for="(item,i) in list" class="shangpin">
			<li><input type="checkbox" v-model="item.b"></li>
			<li><img :src="item.src" alt=""></li>
			<li>{{item.name}}<p>{{item.xiaoji}}</p></li>
			<div>
				<li><button v-on:click="jia({val:-1,i})">-</button>{{item.shuliang}}<button v-on:click="jia({val:1,i})">+</button></li>
			</div>
		</ul>
		</div>
		<div class="dibu">
			<p><input type="checkbox" v-model="select"><span>全选</span></p>
			<ul>
				<li>
				<p>总计：<span>{{zongji}}</span></p>
				<p>不含运费</p>
				</li>
				<li><button>去结算</button></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			list:[
				{"b":false,"src":"../../../static/img/pic01.jpg","name":"港式菠萝包冰火菠萝油面包早餐糕点汉堡胚供奶茶店茶餐厅100克/个","jiage":100.00,"shuliang":1,"xiaoji":100},
				{"b":false,"src":"../../../static/img/pic01.jpg","name":"港式菠萝包冰火菠萝油面包早餐糕点汉堡胚供奶茶店茶餐厅100克/个","jiage":100.00,"shuliang":1,"xiaoji":100},
			],
		}
	},
	computed: {
            select:{
                get(){
                    return this.list.every((item)=>item.b)
                },
                set(v){
                    return this.list.forEach((item)=>item.b=v)
                }
			},
			zongji(){
				var zong=0;
				this.list.forEach((item)=>{
				zong+=item.xiaoji;
				})
				return zong
			}
		},
		methods: {
			jia(j){
				this.list[j.i].shuliang+=j.val
				this.list[j.i].xiaoji=(this.list[j.i].shuliang)*(this.list[j.i].jiage)
				if(this.list[j.i].shuliang==0){
					this.list[j.i].shuliang=1
					this.list[j.i].xiaoji=this.list[j.i].jiage
				}
			}
		},
}
</script>

<style>
		.body{
			background: #efeff4;
			height: 29rem;
		}
	.nav{
		text-align: center;
		padding: .4rem;
		background: #f5f5f5;
	}
	.nav span:nth-of-type(1){
		position: absolute;
		left: 0rem;
	}
	.neirong{
		padding: .3rem .2rem;
		border-top:1px solid #ccc; 
		border-bottom:1px solid #ccc;  
	}
	.shangpin img{
		width: 4rem;
		height: 4rem;
	}
	.shangpin{
		display: flex;
		padding: .6rem .4rem;
		background: #fff;
	}
	.shangpin li:nth-of-type(3){
		font-size: .8rem;
		color: #666;
	}
	.shangpin li:nth-of-type(3) p{
		font-size: .8rem;
		color: red;
	}
	.shangpin div{
		width: 11.6rem;
		text-align: center
	}
	.shangpin div button{
		width: 1.6rem;
		height: 1.6rem;
		border-radius:50%;
		border: 0px;
		background: #fff;
		border: 1px solid #999;
	}
	.shangpin div li{
		line-height: 3.2rem
	}
	.shangpin li:nth-of-type(1) input{
		margin-top: 1.6rem
	}
	.dibu{
		display: flex;
		position: fixed;
		bottom: 2.6rem;
		width: 100%;
		background: #fff;
		z-index: 999;
		justify-content: space-between;
	}
	.dibu ul{
		display: flex;
		align-content: center
	}
	.dibu ul li:nth-of-type(2) button{
		width: 5.5rem;
		height: 2.6rem;
		
	}
	.dibu ul li:nth-of-type(1) p:nth-of-type(1){
		color: red;
		font-size: .8rem;
		margin-top: .4rem;
		margin-right: .3rem;
	}
	.dibu ul li:nth-of-type(1) p:nth-of-type(2){
		color: #666;
		font-size: .4rem;
		text-align: right;
		margin-right: .3rem;

	}
	.dibu p input{
		margin-top: 1rem
	}
</style>