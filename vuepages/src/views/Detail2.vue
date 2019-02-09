<template>
  <div class="detail">
  	<div>
	  	<h1>{{data.productsname}}</h1>
	  	<p class="detailtime">{{dateFormat(data.createTime)}}</p>
	  	<img :src="'http://localhost:9000'+ data.imgPath"/>
	  	<p class="detailcontent">{{data.productscontent}}</p>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {

	data(){
		return {
			datalist:[]
		}
	},

	mounted(){
	console.log(this.$route.params.id)
		axios.get('/data/productdetail',{

			params:{
				id:this.$route.params.id
				
			}
			
		}
			
		).then(res=>{
	      	this.datalist = res.data;
	      	
  			console.log(res.data);
	    })
	},
	methods:{
		//时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
		dateFormat:function(time) {
		    var date=new Date(time);
		    var year=date.getFullYear();
		    /* 在日期格式中，月份是从0开始的，因此要加0
		     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
		     * */
		    var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
		    var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
		    var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
		    var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
		    var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
		    // 拼接
		    return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
		}
	}


	//mounted(){
		// this.$route.params
		//console.log(this.$route.params.myid)
	//}


}
</script>

<style scoped lang="scss">
	.detail{
		padding:0 5%;
	}
	h1{
		text-align:center;
		font-size: 1.3rem;
	    height: 3rem;
	    line-height: 3rem;
	}
	p.detailtime{
		float:right;
		font-size: .8rem;
	}
	img{
		width:100%;
		margin-top: 2rem;
	}
	p.detailcontent{
		line-height: 1.5rem;
    	font-size: 1rem;
	}
</style>
