<template>
  <div class="index">
   <!--轮播-->
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i"
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        </li>
      </ul>
    </div>
  </div>
  <!--轮播-->

  <div class="banner-little">
    <img src="../../public/imgs/banner-little.jpg"/>
  </div>
  <!--留言-->
    <div class="message">
      <form>
        <div class="form-row">
          <input type="text" placeholder="请输入姓名"/>
        </div>
        <div class="form-row">
          <input type="text" placeholder="请输入手机号"/>
        </div>
        <div class="form-row">
          <textarea placeholder="请输入咨询内容"></textarea>
        </div>
        <div class="form-row">
          <input type="submit" value="提交" class="btn"/>
        </div>
      </form>
    </div>
  <!--留言-->
  <section class="line">
    <div>我是有底线的</div>
  </section>
  </div>
</template>


<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      sliders:[
        {
          img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
        },
        {
          img:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
        },
      ],
      imgWidth:600,
      currentIndex:1,
      distance:-600,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null ;
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -3000) this.distance = -600
          if (des > -600) this.distance = -3000
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 600;
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>


<style scoped lang="scss">
	*{
        box-sizing: border-box;
        margin:0;
        padding:0;
      }
      ol,ul{
        list-style: none;
      }
      #slider{
        text-align: center;
      }
      .window{
        position:relative;
        height:15rem;
        margin:0 auto;
        overflow:hidden;
      }
      .container{
        display:flex;
        position:absolute;
      }
      .left, .right{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:50px;
        height:50px;
        background-color:rgba(0,0,0,.3);
        border-radius:50%;
        cursor:pointer;
      }
      .left{
        left:3%;
        padding-left:12px;
        padding-top:10px;
      }
      .right{
        right:3%;
        padding-right:12px;
        padding-top:10px;
      }
      img{
        user-select: none;
        height:15rem;
        display:block;
      }
      .dots{
          position:absolute;
          bottom:10px;
          left:50%;
          transform:translateX(-50%);
        }
      .dots li{
        display:inline-block;
        width:15px;
        height:15px;
        margin:0 3px;
        border:1px solid white;
        border-radius:50%;
        background-color:#333;
        cursor:pointer;
      }
      .dots .dotted{
        background-color:orange;
      }
	


      .message{
        padding: 2.7rem;
        background-color: rgb(40, 40, 40);

      }
      .message .form-row{
        position: relative;
        margin-top: 0.75rem;
      }
      .message .form-row input, .message .form-row textarea{
        display: block;
        width: 100%;
        height: 2.0rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        line-height: 1.0rem;
        border: 0;
        color: rgb(204, 204, 204);
        background-color: rgb(26, 26, 26);
        border-radius: 0;
        -webkit-appearance: none;
        overflow: visible;
      }
      .message .form-row textarea{
        height:4rem;
      }
      .message .form-row .btn{
        color: #fff;
        background-color: #ff283d;
      }
      .banner-little img{
        width:100%;
        height:7rem;
      }

      .line{ margin:0 20px; height:59px; background: url(../../public/imgs/line.png) repeat-x center; text-align:center;
      margin-bottom: 3rem;}
      .line div{ padding:0 16px; display:inline-block;  height:59px; line-height:59px;}
</style>
