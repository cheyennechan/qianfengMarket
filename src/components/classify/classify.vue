<template>
	<div>
		<header>
			<span><</span>
			<div>
				<i class="fa fa-search" aria-hidden="true"></i>
				<input type="text"  placeholder="零食点心"/>
			</div>
			<p>分类</p>
		</header>
		<section>
			<ul >
				<li v-for="(item,index) in leftList" @click="lshow(index)" ><a v-bind:class="{'dianji':num==index}">{{item}}</a></li>
			</ul>
			
			<div>
				<p>{{leftList[num]}}</p>
				<div v-for="(item1,index1) in rightList[num]">
						<div >
							<img :src="item1.img">
						</div>
						
						<p>{{item1.word}}</p>
					
				</div>
			</div>
		</section>
	</div>
</template>
<style scoped lang="scss">
	.dianji{background: #fff;color: #2691e1;}
	header{		
		display: flex;justify-content: space-around;background: #F5F5F5;padding: 2% 1%;align-items: center;border-bottom:0.03125rem solid #ddd;
		span{display:inline-block;height:0.296875rem;height:  2rem ;font-size: 1.6rem;color: darkgrey;};
		div{border: 0.03125rem solid #dddddd;padding: 0.25rem 0.3125rem;box-sizing: border-box;border-radius: 1.25rem;background: #fff;
				i{color: darkgrey;padding:0.3125rem;font-size: 1rem;}
			};
		input{display: inline-block;border: none;width: 12rem;}
		}		
	section{ 
		
		ul {height:30rem;background: #f5f5f5;width: 5rem;position: fixed;top: 3rem;
			li{
				color: #333;text-align: center;line-height: 2rem;width: 5rem;						
				a{color: #333;display: block;font-size: .9rem;padding: 0 0.375rem 0 0.375rem;text-align: center;border-bottom: 1px solid #ddd;background: #f5f5f5;
				}
			}			
		};
		&>div{float: right;width: 15rem;display: flex;flex-wrap: wrap;
			&>p{width: 100%;border-left:0.09375rem solid #ffe037;padding-left: 0.25rem;margin: 0.3125rem;color: #333;font-size: .8rem;}
			&>div{width: 5rem;height: 6rem;box-sizing: border-box;padding: .2rem;
				
					div{border: 1px solid lightgray;
						img{width: 100%;height: 4rem;}					
					};
					p{color: #666;font-size: .7rem;text-align: center;}
				
					
				
			}
			}	
	}
</style>
<script >
	export default {
		data(){
			return {
				num:0,
				leftList:["零食点心","酒水","新鲜水果","生活用品","体育用品","文具","积分专区"],
				rightList:[
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],					
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
				   		{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					],
					[
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"},	
						{img:"../../../static/img/pic.jpg",word:"小面包"}	
					]					
				]					
			}
		},
		methods:{
			lshow(index){
				console.log(index)
				this.num=index;
				console.log(this.rightList[this.num])
			}
		}
	}
	
	
</script>