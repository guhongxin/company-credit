<template>
  <div style="background:#f0f2f5;height:100vh;padding:20px 0px;">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="img_404" alt="404">
        <img class="pic-404__child left" :src="img_404_cloud" alt="404">
        <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
        <img class="pic-404__child right" :src="img_404_cloud" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__info">版权所有
          <a class='link-type' href='https://wallstreetcn.com' target='_blank'>华尔街见闻</a>
        </div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <nuxt-link  to="/" class="bullshit__return-home">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import img_404 from '@/assets/404_images/404.png'
import img_404_cloud from '@/assets/404_images/404_cloud.png'
export default {
  data() {
    return {
      img_404,
      img_404_cloud
    }
  }
}
</script>
<style scoped>
.wscn-http404 {
  width: 80%;
  margin: 0px auto;
}
.pic-404 {
  width: 50%;
  margin: 0px auto;
}
.pic-404 .pic-404__parent {
  width: 100%;
}
.pic-404 .pic-404__child {
  width: 20%;
}
.bullshit {
  margin-top: 30px;
  text-align: center;
}
.bullshit div {
  margin-bottom: 10px;
}
</style>