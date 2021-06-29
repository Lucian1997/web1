<template>
  <div id="pc-company-introduce-banner">
    <b>人工智能行业的务实者和领跑者</b>
    <p>
      雅仕格是全球领先的人工智能产品和解决方案公司。<br>
      深度学习是雅仕格的核心竞争力，也是<br>
      支撑人工智能革命的关键。<br>
      我们目前专注于算法能创造极大价值的领域：<br>
      消费物联网、城市物联网和供应链物联网。<br>
      我们向客户提供包括算法、软件和硬件产品在内的全栈式、一体化解决方案。
    </p>
    <div class="slogan">
      <div style="padding-top: 36px;">
        <p><span>使命</span></p>
        <b>用人工智能造福大众</b>
      </div>
      <div>
        <p><span>愿景</span></p>
        <b>构建连接及赋能百亿物联网设备的 <br>
          人工智能基础设施</b>
      </div>
      <div style="padding-top: 36px;">
        <p><span>文化基因</span></p>
        <b>技术信仰 价值务实</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "IntroduceBanner"
}
</script>

<style scoped>
#pc-company-introduce-banner {
  width: 100%;
  height: 820px;
  background: url('~@/assets/img/company/introduce/banner.jpg') center no-repeat;
  background-size: cover;
  padding: 140px 0;
  color: #fff;
  text-align: center;
}
#pc-company-introduce-banner>b {
  display: block;
  font-size: 32px;
  margin-bottom: 48px;
}

#pc-company-introduce-banner>p {
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 48px;
}
.slogan {
  display: flex;
  width: 1200px;
  height: 140px;
  margin: 0 auto;
  justify-content: space-between;
}
.slogan>div {
  margin-top: 86px;
  width: 28%;
  height: 100%;
  background: rgba(14,87,162,.35);
  padding: 22px 36px;
  transition: all .3s linear;
}
.slogan>div:hover {
  margin-top: 66px;
}
.slogan>div>p>span{
  position: relative;
}
.slogan>div>p>span::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -12px;
  opacity: 0;
  width: 6px;
  height: 17px;
  transform: skew(
      -10deg
  );
  background-color: #2590f2;
  transition: all .3s linear;
}
.slogan>div>p>span::after {
  content: "";
  position: absolute;
  top: 10px;
  right: -12px;
  opacity: 0;
  width: 6px;
  height: 17px;
  transform: skew(
      -10deg
  );
  background-color: #2590f2;
  transition: all .3s linear;
}
.slogan>div:hover>p>span::before {
  top: 2px;
  opacity: 1;
}
.slogan>div:hover>p>span::after {
  top: 2px;
  opacity: 1;
}
</style>