<template>
  <div class="newactivity">
  <div class="activity-title">
    <ul class="product-list">
 		<router-link tag="li" to="/newactivity/product1" activeClass="myactive">新品发布</router-link>
 		<router-link tag="li" to="/newactivity/product2" activeClass="myactive">满减活动</router-link>
 		<router-link tag="li" to="/newactivity/product3" activeClass="myactive">限时优惠</router-link>	
 	</ul>
 	</div>
	<router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss">
	.newactivity{
		display:flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}
	.activity-title{
		background:#fff;
		height:3rem;
		position: fixed;
    	width: 100%;
	}
	ul.product-list{
		list-style:none;
		display:flex;
		color: #fff;
		height: 2rem;
		line-height: 2rem;
		position:fixed;
		width: 90%;
	    margin-right: 5vw;
	    margin-left: 5vw;
	    margin-top: .5rem;
	}
	ul.product-list li{
		flex:1;
		text-align:center;
		background: #282828;
		border:1px solid #282828;
		border-radius:.5rem;
		margin: 0 2px;
	}
	.myactive{
	  color:red;
	}
	

</style>
