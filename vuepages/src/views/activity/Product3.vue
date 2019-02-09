<template>
  <div class="product3">
	<div class="card" v-for="data in activityData">
    	<div class="card-header">{{data.activityname}}</div>
    	<div class="card-content">
      		<div class="card-content-inner">{{data.activitycontent}}</div>
    	</div>
    	<div class="card-footer">{{dateFormat(data.createTime)}}</div>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
	data(){
		return {
			activityData:[]
		}
	},

	mounted(){
		axios.get('/data/product3list').then(result=>{
	      console.log(result.data)
	      this.activityData = result.data;
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
	

}
</script>

<style scoped lang="scss">
	.product3{
		padding: 3rem 1rem .5rem;
    	flex:1;
	}
	.card{
		background:#fff;
		border:1px solid #ccc;
		border-radius:5px;
		margin-bottom: .6rem;
	}
	.card .card-header{
		height:3rem;
		border-bottom:1px solid #ccc;
		line-height: 3rem;
    	text-indent: .5rem;
	}
	.card .card-content{
		line-height: 1.5rem;
    	padding: .5rem;
	}
	.card .card-footer{
		border-top:1px solid #ccc;
		text-indent: .5rem;
		height:2rem;
		line-height:2rem;
	}
</style>