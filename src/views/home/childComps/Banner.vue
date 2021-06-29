<template>
  <div>
    <!--移动端-->
    <div class="d-sm-none">
      <div class="mobile-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-mobile-image">
              <img src="~assets/img/home/banner/banner1.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-mobile-image">
              <img src="~assets/img/home/banner/banner2.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="mobile swiper-pagination"></div>
      </div>
    </div>
    <!--PC端-->
    <div class="d-none d-sm-block">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div id="swiperVideo">
              <video height="600" autoplay="autoplay" loop="loop" muted="muted">
                <source src="~assets/video/banner.mp4">
              </video>
              <div>
                <b>科技驱动未来</b><br>
                <b style="font-size: 30px">TECHNOLOGY DRIVERS THE FUTURE</b>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-image banner1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-image banner2">
            </div>
          </div>
        </div>
        <div class="swiper-button-prev swiper-button-black" @click="prev"></div>
        <div class="swiper-button-next swiper-button-black" @click="next"></div>
        <div class="pc swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"

export default {
  name: "Banner",
  data() {
    return {
      mobileSwiper: null,
      swiper: null
    }
  },
  mounted() {
    this.mobileSwiper = new Swiper(".mobile-swiper-container", {
      loop: true, //循环,
      autoplay:true,
      height: 600,
      pagination: { //分页符
        el: '.mobile.swiper-pagination'
      }
    })
    this.swiper = new Swiper(".swiper-container", {
      loop: true, //循环
      height: 600,
      pagination: { //分页符
        el: '.pc.swiper-pagination'
      }
    })
  },
  methods: {
    prev() {
      this.swiper.slidePrev()
    },
    next() {
      this.swiper.slideNext()
    }
  }
}
</script>

<style scoped>
.mobile-swiper-container {
  position: relative;
}
.swiper-mobile-image {
  width: 100%;
  height: 600px;
}
.swiper-mobile-image img {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  overflow: hidden;
}

.swiper-image {
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.banner1 {
  background-image: url('~@/assets/img/home/banner/banner2.jpg');
}

.banner2 {
  background-image: url('~@/assets/img/home/banner/banner1.jpg');
}

.swiper-button-prev,
.swiper-button-next {
  display: none;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  opacity: .6 !important;
  font-size: 30px;
  font-weight: 600;
  color: #ecf0f1;
}

.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
  display: inline;
}

#swiperVideo {
  position: relative;
}

#swiperVideo div {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 50px;
  line-height: 50px !important;
  color: #fff;
}
</style>