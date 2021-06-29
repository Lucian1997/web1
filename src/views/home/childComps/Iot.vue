<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">
      <div id="mobile-iot">
        <div class="mobile-iot-title">
          三大物联网
        </div>
        <div class="mobile-iot-tabs">
          <div id="mobileIotTab1 active" @click="mobileTap('1')" class="mobile-iot-tabs-item">
            <div class="mobile-tab-icon">
            </div>
            <p>消费物联网</p>
          </div>
          <div id="mobileIotTab2" @click="mobileTap('2')" class="mobile-iot-tabs-item">
            <div class="mobile-tab-icon">
            </div>
            <p>城市物联网</p>
          </div>
          <div id="mobileIotTab3" @click="mobileTap('3')" class="mobile-iot-tabs-item">
            <div class="mobile-tab-icon">
            </div>
            <p>供应链物联网</p>
          </div>
        </div>
        <div class="mobile-iot-photo-wall">
          <div id="mobileWall1" class="mobile-iot-photo-wall-item active">
            <div v-for="item in wall1">
              <a :href="item.href">
                <div class="mobile-photo">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="mobile-photo-text">
                    {{ item.title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="mobileWall2" class="mobile-iot-photo-wall-item">
            <div v-for="item in wall2">
              <a :href="item.href">
                <div class="mobile-photo">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="mobile-photo-text">
                    {{ item.title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div id="mobileWall3" class="mobile-iot-photo-wall-item">
            <div v-for="item in wall3">
              <a :href="item.href">
                <div class="mobile-photo">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="mobile-photo-text">
                    {{ item.title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="pc-iot">
        <div class="iot-title">
          <div>“AI+IoT”融合构建未来</div>
          <div>数字世界的初代操作系统</div>
        </div>
        <div class="iot-photo-wall">
          <div class="iot-photo-wall-item active" id="wall1">
            <div v-for="item in wall1">
              <a :href="item.href">
                <div class="photo">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="photo-text">
                    <div class="photo-text-title">{{ item.title }}</div>
                    <div class="photo-text-desc">{{ item.desc }}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="iot-photo-wall-item" id="wall2">
            <div v-for="item in wall2">
              <a :href="item.href">
                <div class="photo">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="photo-text">
                    <div class="photo-text-title">{{ item.title }}</div>
                    <div class="photo-text-desc">{{ item.desc }}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="iot-photo-wall-item" id="wall3">
            <div v-for="item in wall3">
              <a :href="item.href">
                <div class="photo" style="width: 1200px">
                  <img :src="require(`../../../assets/img/home/iot/${item.src}`)" alt="">
                  <div class="photo-text">
                    <div class="photo-text-title">{{ item.title }}</div>
                    <div class="photo-text-desc" style="width: 600px;">{{ item.desc }}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="iot-tabs">
          <div class="iot-tabs-item">
            <div id="iotTab1" @mouseover="tabOver('1')" @click="iotHref('personal')" class="active">
              <div>消费物联网</div>
              <div>让生活体验从极简到智简</div>
            </div>
            <div id="iotTab2" @mouseover="tabOver('2')" @click="iotHref('city')">
              <div>城市物联网</div>
              <div>让城市管理从治理到智理</div>
            </div>
            <div id="iotTab3" @mouseover="tabOver('3')" @click="iotHref('supplychain')">
              <div>供应链物联网</div>
              <div>让供应链运营从自动到智动</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
export default {
  name: "Iot",
  data() {
    return {
      tab: '1',
      mobileTab: '1',
      wall1: [
        {
          src: 'tab1_1.png',
          title: '计算机摄影解决方案',
          desc: '将“AI算法”能力注入智能手机为代表的智能设备，通过自主研发的“人脸识别算法和移动端卷积神经网络...',
          href: 'javascript:;'
        },
        {
          src: 'tab1_2.jpg',
          title: '设备安全解决方案',
          desc: '基于自研深度学习“人脸识别和活体防伪”算法技术，推出可适配于智能手机和智能设备的“人脸识别与屏下指纹”解锁...',
          href: 'javascript:;'
        },
        {
          src: 'tab1_3.png',
          title: 'FaceID人脸核身解决方案',
          desc: '凭借全球领先的“人脸识别、图像识别和多种活体识别”算法技术，为客户提供“身份证件信息录入、活体识别和人脸...',
          href: 'javascript:;'
        },
        {
          src: 'tab1_4.png',
          title: 'FaceStyle美业解决方案',
          desc: '依靠顶尖的“人脸关键点识别和色彩融合”AI算法，整合“面部特征、皮肤分析和虚拟试妆”诸多功能，基于“肤质和五官...',
          href: 'javascript:;'
        }
      ],
      wall2: [
        {
          src: 'tab2_1.png',
          title: '智慧城市治理综合解决方案',
          desc: '借助5G、大数据、物联网等先进技术，打造善于认识，专为理解、推理和学习的“智慧城市综合治理平台...',
          href: 'javascript:;'
        },
        {
          src: 'tab2_2.png',
          title: '智慧公共安全综合解决方案',
          desc: '从城市公共安全管理痛点和需求出发，基于领先的AI开放平台，以物联网、云计算、大数据和智能视频分析技术...',
          href: 'javascript:;'
        },
        {
          src: 'tab2_3.png',
          title: '智能交通综合解决方案',
          desc: '基于高速、城市等场景下的交通管理工作，以交通全量数据为基础，依托于自主研发的新一代AI生产力平台...',
          href: 'javascript:;'
        },
        {
          src: 'tab2_4.png',
          title: '智慧楼宇通行解决方案',
          desc: '基于自主研发的“人脸识别和图像识别”等AI核心算法能力，依托先进的智能硬件，打造的以“一脸通”为核心...',
          href: 'javascript:;'
        }
      ],
      wall3: [
        {
          src: 'tab3_1.jpg',
          title: '智慧物流园区解决方案',
          desc: '基于新型信息技术的融合应用，以AI技术为代表，对“库内运营和园区管理”双向优化，打造“安全、智慧、共享、绿色”的智慧物流园区...',
          href: 'javascript:;'
        },
        {
          src: 'tab3_2.jpg',
          title: '智慧仓储解决方案',
          desc: '持续算法创新，赋能传统物流装备，率先打造操作系统，聚合全产业链伙伴，形成智慧仓储解决方案...',
          href: 'javascript:;'
        }
      ]
    }
  },
  methods: {
    tabOver(id) {
      this.tab = id
    },
    iotHref(query) {
      window.location.href=`/iot/category?name=${query}`
    },
    mobileTap(id) {
      this.mobileTab = id
    }
  },
  watch: {
    tab(val) {
      let tabs = document.querySelectorAll('.iot-tabs-item>div')
      tabs.forEach(element => element.classList.remove('active'))
      let walls = document.querySelectorAll('.iot-photo-wall-item')
      walls.forEach(element => element.classList.remove('active'))
      let tab = document.querySelector(`#iotTab${val}`)
      tab.classList.add('active')
      let wall = document.querySelector(`#wall${val}`)
      wall.classList.add('active')
    },
    mobileTab(val) {
      let walls = document.querySelectorAll('.mobile-iot-photo-wall-item')
      walls.forEach(element => element.classList.remove('active'))
      let wall = document.querySelector(`#mobileWall${val}`)
      wall.classList.add('active')
    }
  }
}
</script>

<style scoped>
#mobile-iot {
  background-color: #0a2349;
  width: 100%;
  height: 630px;
  overflow: hidden;
  text-align: center;
  padding-top: 50px;
}

.mobile-iot-title {
  width: 100%;
  color: #fff;
  height: 30px;
  line-height: 30px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
}

.mobile-iot-tabs {
  display: flex;
  justify-content: space-between;
  height: 94px;
  margin: 0 42px;
}

.mobile-iot-tabs-item {
  justify-content: center;
  width: 32%;
}

.mobile-tab-icon {
  margin: 0 auto;
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 60px 60px;
}

.mobile-iot-tabs-item > p {
  display: block;
  height: 32px;
  margin: 0;
  font-size: 16px;
  color: #fff;
}

.mobile-iot-photo-wall {
  height: 440px;
  width: 100vw;
}
.mobile-iot-photo-wall-item {
  display: none;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.mobile-iot-photo-wall-item.active {
  animation: fade .5s ease;
  display: flex;
  opacity: 1;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.mobile-iot-photo-wall-item>div {
  width: 50%;
}
.mobile-photo {
  position: relative;
  margin: 0;
  width: 100%;
  height: 220px;
}
.mobile-photo img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mobile-photo-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  color: #fff;
}

#pc-iot {
  background-color: #0a2349;
  width: 100%;
  height: 960px;
  overflow: hidden;
}

.iot-title {
  width: 1200px;
  height: 180px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  line-height: 40px;
  padding: 50px;
  font-size: 24px;
  font-weight: 600;
}

.iot-photo-wall {
  position: relative;
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.iot-photo-wall.active {
  display: inline;
}

.iot-photo-wall-item a {
  text-decoration: none;
}

.iot-photo-wall-item {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  flex-wrap: wrap;
  transition: all .3s ease;
}

.iot-photo-wall-item.active {
  opacity: 1;
}

.photo {
  position: relative;
  width: 600px;
  height: 300px;
  overflow: hidden;
}

.photo img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.photo .photo-text {
  position: absolute;
  width: 600px;
  height: 110px;
  bottom: -50px;
  z-index: 2;
  color: #fff;
  transition: all .3s ease;
}

.photo:hover .photo-text {
  bottom: 20px;
}

.photo-text .photo-text-title {
  height: 60px;
  line-height: 60px;
  padding-left: 36px;
  font-size: 24px;
  font-weight: 600;
}

.photo-text .photo-text-desc {
  width: 400px;
  height: 50px;
  line-height: 25px;
  padding-left: 36px;
  font-size: 14px;
}

.iot-tabs {
  width: 1200px;
  height: 180px;
  margin: 0 auto;
  padding: 40px 0;
}

.iot-tabs-item {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}

.iot-tabs-item > div {
  position: relative;
  width: 33%;
  height: 100%;
  background: #005982;
  color: #fff;
  cursor: pointer;
  opacity: .35;
  transition: all .3s ease-out;
}

.iot-tabs-item > div:after {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 20px solid #005982;
}

.iot-tabs-item > div div {
  text-align: center;
  margin: 0 auto;
}

.iot-tabs-item > div div:first-child {
  height: 60px;
  line-height: 40px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: 600;
}

.iot-tabs-item > div div:last-child {
  height: 40px;
  line-height: 18px;
  font-size: 14px;
}

.iot-tabs-item .active {
  color: #fff;
  background-color: #005982;
  opacity: 1;
}
</style>