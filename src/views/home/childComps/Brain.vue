<template>
  <div>
   <!-- 移动端-->
    <!--<div class="d-sm-none">
      <div id="mobile-brain">
        <p class="mobile-brain-title">深度学习  简单开发</p>
        <p class="mobile-brain-desc">
          新一代AI生产力平台，提供算法、算力、数据的全流程AI生产能力，助力客户实现技术到价值的链接
        </p>
        <div class="mobile-brain-img">
          <img src="~assets/img/home/brain/brain.jpg" alt="">
        </div>
        <a href="javascript:;" class="mobile-brain-button">
          了解平台
        </a>
      </div>
    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="pc-brain">
        <p class="brain-title">深度学习  简单开发</p>
        <p class="brain-desc">
          新一代AI生产力平台，提供算法、算力、数据的全流程AI生产能力，助力客户实现技术到价值的链接
        </p>
        <div class="brain-img">
          <img src="~assets/img/home/brain/brain.jpg" alt="">
        </div>
        <a href="/product/software?name=citysafety" class="brain-button">
          了解平台
        </a>
      </div>
    </div>
 <!-- </div>-->
</template>

<script>
export default {
name: "Brain"
}
</script>

<style scoped>
#mobile-brain {
  width: 100%;
  text-align: center;
  height: 460px;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.mobile-brain-title {
  color: #333;
  z-index: 2;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}
.mobile-brain-desc {
  padding: 0 16px;
  color: #333;
  z-index: 2;
  width: 100%;
  height: 50px;
  font-size: 14px;
  line-height: 18px;
}
.mobile-brain-img {
  width: calc(100% - 64px);
  margin: 0 32px;
  height: 200px;
}

.mobile-brain-img img{
  width: 100%;
  height: 100%;
}

.mobile-brain-button {
  position: absolute;
  top: 380px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 36px;
  line-height: 36px;
  background: rgba(0,0,0,0);
  font-size: 14px;
  color: #0e57a2;
  border: 1px solid rgba(14, 87, 162, .2);
  border-radius: 2px;
}
#pc-brain{
  width: 100%;
  text-align: center;
  height: 840px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}

.brain-title {
  position: absolute;
  color: #333;
  z-index: 2;
  top: 80px;
  left: 50%;
  transform: translate(-50%,0);
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
}

.brain-desc {
  position: absolute;
  color: #333;
  z-index: 2;
  top: 152px;
  height: 48px;
  font-size: 14px;
  line-height: 24px;
  width: 425px;
  left: 50%;
  transform: translateX(-50%);
}

.brain-img {
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  width: 886px;
  height: 480px;
}

.brain-img img{
  width: 100%;
  height: 100%;
}

.brain-button {
  position: absolute;
  top: 720px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 46px;
  line-height: 46px;
  background: rgba(0,0,0,0);
  color: #0e57a2;
  border: 1px solid rgba(14, 87, 162, .2);
  border-radius: 2px;
  transition: all .3s ease;
}

.brain-button:hover {
  background: rgba(14, 87, 162, .1);
}
</style>