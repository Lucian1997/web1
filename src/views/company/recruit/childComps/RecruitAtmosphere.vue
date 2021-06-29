<template>
  <div id="pc-company-recruit-atmosphere">
    <b>工作在雅仕格</b>
    <div class="atmosphere-tabs">
      <div class="active" @click="switchTab(1)">
        <i class="fa fa-users"></i>
        工作环境
      </div>
      <div @click="switchTab(2)">
        <i class="fa fa-cube"></i>
        研究氛围
      </div>
      <div @click="switchTab(3)">
        <i class="fa fa-gamepad"></i>
        娱乐活动
      </div>
      <div @click="switchTab(4)">
        <i class="fa fa-trophy"></i>
        团队风采
      </div>
    </div>
    <div class="atmosphere-image">
      <div class="atmosphere-image-item">
        <div>
          <img src="~assets/img/company/recruit/atmosphere/atmosphere_1.jpg" alt="">
        </div>
        <div>
          <img src="~assets/img/company/recruit/atmosphere/atmosphere_2.jpg" alt="">
        </div>
        <div>
          <img src="~assets/img/company/recruit/atmosphere/atmosphere_3.jpg" alt="">
        </div>
        <div>
          <img src="~assets/img/company/recruit/atmosphere/atmosphere_4.jpg" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecruitAtmosphere",
  methods: {
    switchTab(index) {
      let tabs = document.querySelectorAll('#pc-company-recruit-atmosphere>.atmosphere-tabs>div')
      tabs.forEach(element => {
        element.classList.remove('active')
      })
      let image = document.querySelector('#pc-company-recruit-atmosphere>.atmosphere-image>.atmosphere-image-item')
      switch (index) {
        case 1:
          tabs[0].classList.add('active')
          image.style.left = '0'
          break
        case 2:
          tabs[1].classList.add('active')
          image.style.left = '-1200px'
          break
        case 3:
          tabs[2].classList.add('active')
          image.style.left = '-2400px'
          break
        case 4:
          tabs[3].classList.add('active')
          image.style.left = '-3600px'
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-company-recruit-atmosphere {
  width: 100%;
  height: 810px;
  padding: 80px 0;
  text-align: center;
  color: #333;
  text-align: center;
}

#pc-company-recruit-atmosphere > b {
  display: block;
  margin: 0 auto;
  height: 80px;
  line-height: 60px;
  font-size: 32px;
  padding-bottom: 20px;
}

.atmosphere-tabs {
  width: 1200px;
  display: flex;
  padding: 0 200px 0 200px;
  margin: 0 auto;
  height: 24px;
}

.atmosphere-tabs > div {
  flex: 1;
  color: #3A3A3A;
  line-height: 24px;
  font-size: 18px;
  cursor: pointer;
}

.atmosphere-tabs > div.active {
  font-weight: 600;
  color: #0e57a2;
}

.atmosphere-tabs > div:not(:last-child) {
  border-right: 1px solid #3A3A3A;
}

.atmosphere-tabs > div:not(.active):hover {
  color: #0e57a2;
}

.atmosphere-image {
  width: 1200px;
  height: 546px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.atmosphere-image-item {
  position: absolute;
  top: 60px;
  left: 0;
  width: 4800px;
  height: 486px;
  display: flex;
  transition: all .3s;
}

.atmosphere-image-item > div {
  width: 1200px;
  height: 486px;
}

.atmosphere-image > div img {
  width: 100%;
  height: 100%;
}
</style>