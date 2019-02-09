<template>
	<div class="product"> 
    <div>
      <div v-for='data in datalist' class="product-list" @click="handleClick(data._id)">
        <img :src="'http://localhost:9000'+ data.imgPath"/>
        <p>{{data.productsname}}</p>   
      </div>

    </div>

	</div>
</template>

<style scoped lang="scss">
.product{
  margin-bottom: 3rem;
}
  .product-list{
    margin:2% 3%;
    position:relative;
  }
  .product-list img{
    width:100%;
    display:block;
  }
  .product-list p{
    position:absolute;
    background:rgba(0,0,0,.5);
    color:#fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width:96%;
    text-align:center;
    padding:2%;
  }
</style>

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
    axios({
      url:"/data/product"
    }).then(res=>{
      this.datalist = res.data;
      console.log(res.data);
    })
  },
  methods:{
    handleClick(index){
      // console.log(index);
      this.$router.push(`/detail/${index}`)
    }
  }

}
</script>