<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">
      <div id="mobile-case">
        <b>合作案例</b>
        <div class="mobile-case-swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="mobile-case-slide">
                <div>
                  <img src="~assets/img/home/case/bg_city.jpg" alt="">
                </div>
                <p>{{ tab1.desc }}</p>
                <a>{{ tab1.title }}&emsp;&emsp;<b-icon icon="arrow-right"></b-icon></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="mobile-case-slide">
                <div>
                  <img src="~assets/img/home/case/bg_finance.jpg" alt="">
                </div>
                <p>{{ tab2.desc }}</p>
                <a>{{ tab2.title }}&emsp;&emsp;<b-icon icon="arrow-right"></b-icon></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="mobile-case-slide">
                <div>
                  <img src="~assets/img/home/case/bg_city.jpg" alt="">
                </div>
                <p>{{ tab3.desc }}</p>
                <a>{{ tab3.title }}&emsp;&emsp;<b-icon icon="arrow-right"></b-icon></a>
              </div>
            </div>
          </div>
          <div class="mobile-case-pagination swiper-pagination"></div>
        </div>
      </div>
    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="pc-case">
        <b class="case-title">合作案例</b>
        <div class="case-tabs">
          <div class="case-tabs-item active" @mouseover="tabOver('1')" id="caseTab1">
            <p class="tab-title">{{ tab1.title }}</p>
            <p class="tab-desc">{{ tab1.desc }}</p>
          </div>
          <div class="case-tabs-item" @mouseover="tabOver('2')" id="caseTab2">
            <p class="tab-title">{{ tab2.title }}</p>
            <p class="tab-desc">{{ tab2.desc }}</p>
          </div>
          <div class="case-tabs-item" @mouseover="tabOver('3')" id="caseTab3">
            <p class="tab-title">{{ tab3.title }}</p>
            <p class="tab-desc">{{ tab3.desc }}</p>
          </div>
        </div>
        <a href="javascript:;" class="case-more">更多成功案例&emsp;&emsp;<i class="fa fa-chevron-circle-right"></i>
        </a>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"

export default {
  name: "Case",
  data() {
    return {
      mobileSwiper: null,
      tab: 1,
      tab1: {
        title: '智慧城市行业',
        desc: '利用数字孪生技术构建智慧城市数字空间，以炫酷视觉效果、全面数据集成、场景化业务展示为支撑，有效提升城市IOC管理人员对城市运营、治安、交通、政务等业务监控管理效率，支撑智慧城市、智慧园区辅助决策'
      },
      tab2: {
        title: '消费电子行业',
        desc: '信息技术的生命周期正逐年缩短。在“新技术集中应用、消费格局转变和智能设备普及”等因素综合影响下，消费电子产品从电子化、联网化正向“智能化及智慧化”演变，速度明显加快，新应用也在不断涌现。'
      },
      tab3: {
        title: '智慧物流行业',
        desc: '通过智能软硬件、物联网、大数据等智慧化技术手段，实现物流各环节精细化、动态化、可视化管理，提高物流系统智能化分析决策和自动化操作执行能力，提升物流运作效率'
      }
    }
  },
  mounted() {
    this.mobileSwiper = new Swiper(".mobile-case-swiper-container", {
      loop: true, //循环,
      autoplay: true,
      height: 470,
      pagination: { //分页符
        el: '.mobile-case-pagination.swiper-pagination'
      }
    })
  },
  methods: {
    tabOver(id) {
      this.tab = id
      let bg = document.querySelector('.case-tabs')
      switch (id) {
        case '1':
          bg.style.backgroundImage = `url('${require('@/assets/img/home/case/bg_city.jpg')}')`
          break;
        case '2':
          bg.style.backgroundImage = `url('${require('@/assets/img/home/case/bg_finance.jpg')}')`
          break;
        case '3':
          bg.style.backgroundImage = `url('${require('@/assets/img/home/case/bg_logistics.jpg')}')`
          break;
      }
    }
  },
  watch: {
    tab(val) {
      let tabs = document.querySelectorAll('.case-tabs>div')
      tabs.forEach(element => element.classList.remove('active'))
      let tab = document.querySelector(`#caseTab${val}`)
      tab.classList.add('active')
    }
  }
}
</script>

<style scoped>
#mobile-case {
  width: 100%;
  height: 660px;
  padding-top: 50px;
}

#mobile-case b {
  display: block;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
  padding-bottom: 20px;
}

.mobile-case-swiper-container {
  position: relative;
  height: 502px;
}

.mobile-case-pagination{
  bottom: 310px;
}
.mobile-case-slide {
  width: 360px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(#f2f3f5, #fdfdfd);
}

.mobile-case-slide > div {
  width: 100%;
  height: 200px;
}

.mobile-case-slide > div img {
  width: 100%;
  height: 100%;
}

.mobile-case-slide > p {
  margin: 32px 16px 0 16px;
  height: 240px;
  text-align: justify;
  font-size: 15px;
  line-height: 28px;
}

.mobile-case-slide > a {
  height: 30px;
  display: block;
  margin: 0 auto;
  text-align: center;
  color: #007db8;
  font-size: 20px;
}

#pc-case {
  width: 100%;
  height: 760px;
  padding: 50px 0;
  background-color: #fff;
}

.case-title {
  display: block;
  width: 1200px;
  height: 80px;
  line-height: 40px;
  padding: 16px 0 24px 0;
  margin: 0 auto;
  font-size: 36px;
  color: #0a2349;
  text-align: center;
}

.case-tabs {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  background-image: url('~@/assets/img/home/case/bg_city.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: all .3s ease;
}

.case-tabs-item {
  width: 340px;
  height: 100%;
  background: transparent;
  color: #00f5f2;
  padding: 100px 60px;
  transition: all .3s ease;
}

.case-tabs-item:first-child {
  border-right: 1px solid #fff;
}

.case-tabs-item:last-child {
  border-left: 1px solid #fff;
}

.case-tabs-item.active {
  width: 520px;
  color: #fff;
}

.case-tabs-item .tab-title {
  display: block;
  height: 64px;
  line-height: 48px;
  padding-top: 16px;
  font-size: 36px;
}

.case-tabs-item .tab-desc {
  display: none;
  height: 220px;
  margin: 0;
  text-align: justify;
  font-size: 18px;
  line-height: 32px;
}

.case-tabs-item.active .tab-desc {
  display: block;
}

.case-more {
  display: block;
  margin: 0 auto;
  padding-top: 34px;
  width: 1200px;
  height: 80px;
  line-height: 46px;
  text-align: center;
  line-height: 46px;
  background: rgba(0, 0, 0, 0);
  color: #007db8;
  font-size: 20px;
}
</style>