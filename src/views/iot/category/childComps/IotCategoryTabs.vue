<template>
  <div id="pc-iot-category-tabs">
    <div @click="tabClick('personal')"><span>消费物联网</span></div>
    <div @click="tabClick('city')"><span>城市物联网</span></div>
    <div @click="tabClick('supplychain')"><span>供应链物联网</span></div>
  </div>
</template>

<script>
export default {
  name: "IotCategoryTabs",
  mounted() {
    let tabs = document.querySelector('#pc-iot-category-tabs')
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    window.onscroll = function () {
      let afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (afterScrollTop > scrollTop) {
        if (scrollTop > 520) {
          tabs.classList.add('isShow')
        }else {
          tabs.classList.remove('isShow')
        }
        scrollTop = afterScrollTop
      } else {
        tabs.classList.remove('isShow')
        scrollTop = afterScrollTop
      }
    }
  },
  methods: {
    tabClick(val) {
      this.switchCategory(val)
      this.$emit('switchCategory', val)
    },
    switchCategory(val) {
      let elements = document.querySelectorAll('#pc-iot-category-tabs>div')
      elements.forEach(element => {
        element.classList.remove('active')
      })
      switch (val) {
        case 'personal':
          elements[0].classList.add('active')
          break
        case 'city':
          elements[1].classList.add('active')
          break
        case 'supplychain':
          elements[2].classList.add('active')
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-iot-category-tabs {
  display: flex;
  position: fixed;
  top: -68px;
  width: 100%;
  padding: 0 40px;
  height: 68px;
  transition: all .3s;
  z-index: 1000;
  background: #fff;
}
.isShow {
  top: 0 !important;
}
#pc-iot-category-tabs>div {
  flex: 1;
  height: 100%;
  line-height: 28px;
  padding: 20px 0;
  font-size: 20px;
  color: #333;
  text-align: center;
  background-image: linear-gradient(360deg,#f7f9fb 0,#ecf2f8 100%);
  cursor: pointer;
}
#pc-iot-category-tabs>div:nth-child(2) {
  background-image: linear-gradient(0deg,#e7edf4 0,#e3eef8 100%);
}
#pc-iot-category-tabs>div.active {
  background-image: none;
  font-weight: 600;
  background-color: #0e57a2;
  color: #fff;
}
#pc-iot-category-tabs>div>span {
  position: relative;
}
#pc-iot-category-tabs>div.active>span:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 20px;
  left: -16px;
  background-color: #2590f2;
  bottom: 2px;
  transform: skew(
      -10deg
  );
}
#pc-iot-category-tabs>div.active>span:after {
  content: "";
  position: absolute;
  width: 5px;
  height: 20px;
  right: -16px;
  background-color: #2590f2;
  bottom: 2px;
  transform: skew(
      -10deg
  );
}
</style>