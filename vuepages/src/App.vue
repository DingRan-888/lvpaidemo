<template>
  <div id="box">
     <!-- header -->
    <header>
        <h1>旅拍秀</h1>
       
    </header>

     <!-- 页面内容区 -->
    <div class="product-content">
        <router-view></router-view>
    </div>

      <!-- footer -->
    <ul class="footer">
      <router-link tag="li" class="footer-li" to="/index" activeClass="myactive">
        <i class="iconfont icon-shouye" activeClass="myactive"></i>
        <p activeClass="myactive">首页</p>
      </router-link>
      <router-link tag="li" class="footer-li" to="/product" activeClass="myactive">
        <i class="iconfont icon-iconfonticon-shebei" activeClass="myactive"></i>
        <p activeClass="myactive">作品</p>
      </router-link>
      <router-link tag="li" class="footer-li" to="/newactivity" activeClass="myactive">
        <i class="iconfont icon-iconfont19" activeClass="myactive"></i>
        <p activeClass="myactive">最新活动</p>
      </router-link>
    </ul>
    
  </div>
</template>

<script type="text/javascript">
  //组件 data 是函数

  export default {
    data(){
      return {
        mytext:""
      }
    }
  }
</script>


<style lang="scss">
*{
  margin:0px;
  padding:0px;
}
html,body{
  height:100%;
}
img{
  width:100%;
}
header h1{
  font-size:1.5rem;
}
ul{
  list-style:none;
}
#box{
  height:100%; 
  display:flex; 
  flex-direction:column;
}
ul.footer{
  display:flex;
  background:#000; 
  color:#fff;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 2.7rem;
  padding: 0;
  table-layout: fixed;
}
li.footer-li{
  flex:1;
  position: relative;
  display: table-cell;
  width: 1%;
  height: 2.5rem;
  text-align: center;
  vertical-align: middle;

}
.myactive{
  color:red;
}

header{
  height: 3.25rem;
  color: #fff;
  background-color: #000;
  line-height: 3.25rem;
  text-align: center;
}
.product-content{
    top: 5rem;
    overflow: auto;
    flex: 1;
    
}
</style>
