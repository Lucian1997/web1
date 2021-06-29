<template>
  <div id="pc-technology-algorithm-banner">
    <b>核心算法</b>
    <p>雅仕格的“AI算法”以深度学习为技术，面向广泛“图像或视频”的分析和理解，以解决真实问题为向导，追求软硬结合的极致性能，向客户交付工业级的产品和服务</p>
  </div>
</template>

<script>
export default {
name: "AlgorithmBanner"
}
</script>

<style scoped>
#pc-technology-algorithm-banner {
  width: 100%;
  height: 390px;
  padding: 48px;
  background: url("~@/assets/img/technology/algorithm/bg_algorithm.jpg") center no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
}
#pc-technology-algorithm-banner>b {
  display: block;
  width: 1200px;
  height: 74px;
  line-height: 60px;
  padding: 8px 0;
  margin: 0 auto;
  font-size: 32px;
}
#pc-technology-algorithm-banner>p {
  display: block;
  width: 780px;
  height: 196px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 28px;
}
</style>