<template>
  <div id="app">
    <div @click="$router.push({path:'/'})">返回首页</div>
    <!--
      color="#000"颗粒颜色
      :particleOpacity="0.7"粒子不透明度
      :particlesNumber="80"颗粒数量
      shapeType="circle"可用的形状类型：“圆形circle”，“边缘edge”，“三角形triangle”，“多边形polygon”，“星形star”
      :particleSize="4"单颗粒大小
      linesColor="#dedede"线条颜色
      :linesWidth="1"线宽
      :lineLinked="true"启用线
      :lineOpacity="0.4"线不透明度
      :linesDistance="150"线距
      :moveSpeed="3"粒子速度
      :hoverEffect="true"启用悬停效果
      hoverMode="grab"可用的悬停模式：“抓取grab”，“排斥repulse”，“气泡bubble”
      :clickEffect="true"启用点击效果
      clickMode="push"可用的点击模式：“推push”，“删除remove”，“排斥repulse”，“气泡bubble”
      -->
    <vue-particles
      color="#000"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
    // import VueParticles from 'vue-particles'

    export default {
        name: "Particles",
        // components:{VueParticles}
    }
</script>

<style scoped>

</style>
