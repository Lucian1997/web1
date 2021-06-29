<template>
  <div id="pc-company-introduce-implementation">
    <b>历经验证的落地能力</b>
    <p>雅仕格策略性地聚焦于消费物联网、城市物联网和供应链物联网三大垂直领域，逐渐拓展了业务布局。</p>
    <div>
      <a href="javascript:;">
        <div class="introduce-implementation-item tab1"></div>
        <div class="tab-body">
          <b>消费物联网</b>
          <p>雅仕格进入消费物联网领域，“扩大连接 — 平台搭建 — 数据变现”，以产品的形式服务全球开发者及企业用户，为其提供数十种AI能力。为智能手机提供设备安全和计算摄影解决方案。</p>
        </div>
      </a>
      <a href="javascript:;">
        <div class="introduce-implementation-item tab2"></div>
        <div class="tab-body">
          <b>城市物联网</b>
          <p>雅仕格进入城市物联网领域，统一对城市的物联网设备进行管理、监控、运维。推出了人工智能摄像头，并不断强化硬件能力以配合尖端计算机视觉算法。打造众多硬件产品。同时，基于覆盖云边端的算法、软件、硬件能力，雅仕格的城市物联网解决方案正应用于多个城市地区。</p>
        </div>
      </a>
      <a href="javascript:;">
        <div class="introduce-implementation-item tab3"></div>
        <div class="tab-body">
          <b>供应链物联网</b>
          <p>雅仕格进入供应链物联网领域，实现供应链资源深度可视化，推出了智慧物流操作系统，并参与研发多款智慧物流硬件。在供应链物联网领域，向鞋服、医药、智能制造、零售电商等多个行业的客户提供了仓库、工场及零售店的智能化升级改造。</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroduceImplementation"
}
</script>

<style scoped>
#pc-company-introduce-implementation{
  width: 100%;
  height: 640px;
  position: relative;
  text-align: center;
  color: #fff;
}
#pc-company-introduce-implementation>div {
  width: 100%;
  height: 640px;
  display: flex;
}
#pc-company-introduce-implementation>b {
  display: block;
  position: absolute;
  top: 46px;
  width: 100%;
  margin: 0 auto;
  font-size: 32px;
  z-index: 2;
}
#pc-company-introduce-implementation>p {
  display: block;
  position: absolute;
  top: 120px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  z-index: 2;
}
#pc-company-introduce-implementation>div>a {
  display: block;
  flex: 1;
  overflow: hidden;
  position: relative;
}
.introduce-implementation-item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all .3s;
}
.tab1 {
  background-image: url('~@/assets/img/company/introduce/tab1.jpg');
}
.tab2 {
  background-image: url('~@/assets/img/company/introduce/tab2.jpg');
}
.tab3 {
  background-image: url('~@/assets/img/company/introduce/tab3.jpg');
}
.tab-body {
  position: absolute;
  bottom: -76px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  margin: 0 auto;
  color: #fff;
  transition: all .3s;
}
.tab-body>b {
  display: block;
  height: 66px;
  line-height: 66px;
  font-size: 24px;
}
.tab-body>p {
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-size: 14px;
  line-height: 28px;
  width: 326px;
  height: 120px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  text-align: left;
  opacity: 0;
  transition: all .3s;
  margin: 0;
}
#pc-company-introduce-implementation>div>a:hover>.tab-body {
  bottom: 36px;
}
#pc-company-introduce-implementation>div>a:hover>.tab-body>p {
  opacity: 1;
}
#pc-company-introduce-implementation>div>a:hover>.introduce-implementation-item {
  transform: scale(1.2);
}
</style>