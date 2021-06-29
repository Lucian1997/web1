<template>
  <div id="pc-iot-category-banner">
    <b>雅仕格AIot能力</b>
    <p>
      在人工智能与物联网技术的推动下，物理世界将被改造为万物互联世界，同时创造出一个与之孪生的数字世界。雅仕格基于自身核心的算法能力与软硬件结合能力
      <br>面向核心应用场景，构建了消费物联网、城市物联网和供应链物联网三大业务体系，作为未来数字世界的初代操作系统。
    </p>
    <div class="banner-bg"></div>
    <div class="banner-tabs">
      <div class="tab1" @click="href('personal')">
        <div></div>
        <b>消费物联网</b>
      </div>
      <div class="tab2" @click="href('city')">
        <div></div>
        <b>城市物联网</b>
      </div>
      <div class="tab3" @click="href('supplychain')">
        <div></div>
        <b>供应链物联网</b>
      </div>
    </div>
    <div class="banner-desc"><p>{{ info }}</p></div>
  </div>
</template>

<script>
export default {
  name: "IotCategoryBanner",
  data() {
    return {
      info: '',
      desc: [
        '自雅仕格进入消费物联网领域，以SaaS产品的形式服务全球开发者及企业用户，为其提供数十种AI能力。雅仕格亦与众多消费电子领域头部客户开展合作，累计为数亿台智能手机提供设备安全和计算摄影解决方案。',
        '自雅仕格进入城市物联网领域，推出了人工智能摄像头，并不断强化硬件能力以配合尖端计算机视觉算法。目前，雅仕格已累计打造四大品类、数十款硬件产品。同时，基于覆盖云边端的算法、软件、硬件能力，雅仕格的城市物联网解决方案正应用于百余座国内城市、十余个国家和地区。',
        '自雅仕格进入供应链物联网领域，随后推出了智慧物流操作系统，并自研包括AMR机器人、SLAM导航智能无人叉车、人工智能堆垛机等多款智慧物流硬件。在供应链物联网领域，雅仕格已向鞋服、医药、智能制造、零售电商等多个行业的客户提供了仓库、工场及零售店的智能化升级改造。'
      ]
    }
  },
  mounted() {
    this.switchCategory(this.$route.query.name)
  },
  methods: {
    href(category) {
      window.location.href=`/iot/category?name=${category}`
    },
    switchCategory(str) {
      let tabs = document.querySelectorAll('#pc-iot-category-banner .banner-tabs>div')
      tabs.forEach(element => {
        element.classList.remove('active')
      })
      switch (str) {
        case 'personal':
          tabs[0].classList.add('active')
          this.info = this.desc[0]
          break
        case 'city':
          tabs[1].classList.add('active')
          this.info = this.desc[1]
          break
        case 'supplychain':
          tabs[2].classList.add('active')
          this.info = this.desc[2]
          break
      }
      this.$emit('switchCategory', str)
    }
  }
}
</script>

<style scoped>
#pc-iot-category-banner {
  width: 100%;
  height: 720px;
  text-align: center;
  position: relative;
  color: #fff;
}

#pc-iot-category-banner > b {
  display: block;
  position: absolute;
  top: 76px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
}

#pc-iot-category-banner > p {
  display: block;
  position: absolute;
  width: 1200px;
  top: 132px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
}

.banner-bg {
  width: 100%;
  height: 380px;
  background: url('~@/assets/img/iot/category/banner.jpg') center no-repeat;
  background-size: cover;
}
.banner-desc {
  position: absolute;
  top: 580px;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  width: 1200px;
  text-align: left;
  padding: 0 180px;
}
.banner-desc p {
  text-indent: 32px;
}

.banner-tabs {
  position: absolute;
  top: 256px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 1200px;
  height: 270px;
  background: #fff;
  z-index: 1;
}

.banner-tabs > div {
  flex: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;
}

.banner-tabs > div > b {
  position: absolute;
  left: 50%;
  bottom: 52px;
  transform: translateX(-50%);
  font-size: 28px;
  color: #666;
  transition: all .5s;
}

.banner-tabs > div > b:before,
.banner-tabs > div > b:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 24px;
  background-color: #2590f2;
  bottom: 8px;
  transform: skew(
      -10deg
  );
  opacity: 0;
  transition: all .5s;
}

.banner-tabs > div > b:before {
  left: -10px;
}

.banner-tabs > div > b:after {
  right: -10px;
}

.banner-tabs > div.active > b:before,
.banner-tabs > div.active > b:after,
.banner-tabs > div:not(.active):hover > b:after,
.banner-tabs > div:not(.active):hover > b:before {
  opacity: 1;
}

.banner-tabs > div.active > div {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 234px;
  height: 290px;
  background-size: 234px 290px !important;
  z-index: 11;
}

.banner-tabs > div.active > b,
.banner-tabs > div:not(.active):hover > b {
  bottom: 66px;
  color: #0e57a2;
}

.banner-tabs > div:not(.active):hover::after {
  content: '';
  position: absolute;
  opacity: 1;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 234px;
  height: 290px;
  background-size: 234px 290px !important;
  z-index: 10;
  animation: tabHover .5s;
}

@keyframes tabHover {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100% {
    opacity: 1;
    bottom: 60px;
  }
}

.tab1 {
  background-image: url('~@/assets/img/iot/category/tab1.png');
}

.tab2 {
  background-image: url('~@/assets/img/iot/category/tab2.jpg');
}

.tab3 {
  background-image: url('~@/assets/img/iot/category/tab3.jpg');
}

.banner-tabs > .tab1.active > div {
  background: url('~@/assets/img/iot/category/tab1_hover.png') no-repeat;
}

.banner-tabs > .tab2.active > div {
  background: url('~@/assets/img/iot/category/tab2_hover.png') no-repeat;
}

.banner-tabs > .tab3.active > div {
  background: url('~@/assets/img/iot/category/tab3_hover.png') no-repeat;
}

.banner-tabs > .tab1:hover::after {
  background: url('~@/assets/img/iot/category/tab1_hover.png') no-repeat;
}

.banner-tabs > .tab2:hover::after {
  background: url('~@/assets/img/iot/category/tab2_hover.png') no-repeat;
}

.banner-tabs > .tab3:hover::after {
  background: url('~@/assets/img/iot/category/tab3_hover.png') no-repeat;
}
</style>