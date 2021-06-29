<template>
  <div id="pc-product-software-scene">
    <b>应用场景</b>
    <div class="scene-content">
      <div v-for="item in info" class="scene-content-item">
        <div>
          <img :src="item.imgSrc" alt="">
        </div>
        <b>{{item.title}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareScene",
  data() {
    return {
      info: [],
      citysafety: [
        {
          title: '社会治安管理',
          imgSrc: require('@/assets/img/product/software/citysafety/scene_1.jpg')
        },
        {
          title: '信息安全管理',
          imgSrc: require('@/assets/img/product/software/citysafety/scene_2.jpg')
        },
        {
          title: '民生政务管理',
          imgSrc: require('@/assets/img/product/software/citysafety/scene_3.jpg')
        },
        {
          title: '重大活动保障',
          imgSrc: require('@/assets/img/product/software/citysafety/scene_4.jpg')
        }
      ],
      citygovernance: [
        {
          title: '市容环境管理',
          imgSrc: require('@/assets/img/product/software/citygovernance/scene_1.jpg')
        },
        {
          title: '突发事件管理',
          imgSrc: require('@/assets/img/product/software/citygovernance/scene_2.jpg')
        },
        {
          title: '施工管理',
          imgSrc: require('@/assets/img/product/software/citygovernance/scene_3.jpg')
        },
        {
          title: '街面秩序管理',
          imgSrc: require('@/assets/img/product/software/citygovernance/scene_4.jpg')
        }
      ],
      robotwarehouse: [
        {
          title: '工业物流园区',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/scene_1.jpg')
        },
        {
          title: '商业物流园区',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/scene_2.jpg')
        },
        {
          title: '智能工厂线边仓',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/scene_3.jpg')
        },
        {
          title: '智能物流中心',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/scene_4.jpg')
        }
      ],
      aiotviews: [
        {
          title: '智慧楼宇',
          imgSrc: require('@/assets/img/product/software/aiotviews/scene_1.jpg')
        },
        {
          title: '智慧园区',
          imgSrc: require('@/assets/img/product/software/aiotviews/scene_2.jpg')
        },
        {
          title: '智慧校园',
          imgSrc: require('@/assets/img/product/software/aiotviews/scene_3.jpg')
        }
      ],
      aiotintelligence: [
        {
          title: '智慧楼宇',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/scene_1.jpg')
        },
        {
          title: '零售门店',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/scene_2.jpg')
        },
        {
          title: '通行考勤',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/scene_3.jpg')
        }
      ]
    }
  },
  props: {
    software: {
      type: String,
      default: ''
    }
  },
  watch: {
    software(val) {
      let elements = document.querySelectorAll('#pc-product-software-scene>div')
      switch (val) {
        case 'citysafety':
          this.info = this.citysafety
          break
        case 'citygovernance':
          this.info = this.citygovernance
          break
        case 'robotwarehouse':
          this.info = this.robotwarehouse
          break
        case 'aiotviews':
          this.info = this.aiotviews
          console.log(elements);
          elements.forEach(element => element.classList.add('odd'))
          break
        case 'aiotintelligence':
          this.info = this.aiotintelligence
          elements.forEach(element => element.classList.add('odd'))
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-product-software-scene {
  width: 100%;
  padding: 80px 0;
  text-align: center;
}

#pc-product-software-scene > b {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  color: #333;
}

.scene-content {
  width: 1200px;
  height: 480px;
  padding-top: 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.scene-content.odd {
  height: 260px;
}
.scene-content.odd>div {
  width: 390px !important;
}
.scene-content-item {
  width: 590px;
  height: 210px;
  background: #000;
  position: relative;
  overflow: hidden;
}

.scene-content-item:first-child,
.scene-content-item:nth-child(2) {
  margin-bottom: 20px;
}

.scene-content-item > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
}

.scene-content-item:hover > div {
  transform: scale(1.1);
}

.scene-content-item > div img {
  width: 100%;
  height: 100%;
}

.scene-content-item > b {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .5s;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
}

.scene-content-item > b:after {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  height: 3px;
  width: 0;
  margin: auto;
  background: #2590f2;
  transition: all .3s linear 0s;
}

.scene-content-item:hover > b:after {
  width: calc(100% + 16px);
}
</style>