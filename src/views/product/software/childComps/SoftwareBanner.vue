<template>
  <div id="pc-product-software-banner">
    <b>{{info.title}}</b>
    <p>{{info.desc}}</p>
  </div>
</template>

<script>
export default {
  name: "SoftwareBanner",
  data() {
    return {
      info: {
        title: '',
        desc: ''
      },
      citysafety: {
        title: '城市公共安全综合软件平台',
        desc: '面向城市物联网打造的“全场景智慧城市”公共安全综合软件平台，致力于面向城市管理全场景应用，通过连接城市中的各类视觉传感设备，实现从数据接入、解析、挖掘、应用闭环，助力城市管理运行效率提升。'
      },
      citygovernance: {
        title: '城市治理综合软件平台',
        desc: '城市治理综合软件平台是城市大脑的重要组成部分，基于场景检测识别，覆盖城市管理、社会治理、环保、交通等应用场景，对各类违法/违规行为或现象进行检测识别，致力于提供非现场执法解决方案，减少城市治理部门人力成本投入，并可对违法单元充分发挥雅仕格对城市事件和城市部件的识别技术优势，实现城市问题源头治理。'
      },
      robotwarehouse: {
        title: '机器人仓储物流软件平台',
        desc: '基于一系列“顶尖AI算法”，面向供应链物联网打造的“机器人物联网操作系统”。致力于将“机器人及智能装备”在“仓储、物流、制造和供应链”等行业场景，实现模式创新突破，将软硬件的“快速集成、一站式规划和仿真-运维-运营”全流程贯通，助力物流和供应链拥有“人机协同与智能物联”的新能力。'
      },
      aiotviews: {
        title: 'AIoT视图综合应用平台',
        desc: '面向泛楼宇园区行业提供的一套自主研发的AIoT视图综合应用平台。基于领先的AI算法能力，通过私有化的部署模式，为客户提供智慧园区、一脸通、警戒等可视化业务应用，提高企业人员管理效率，降低运营管理成本。最终，帮助企业实现数字化管理模式的成功转型。'
      },
      aiotintelligence: {
        title: 'AIoT智能物联商业云平台',
        desc: '面向中小企业自主研发的“商业物联云”软件平台。基于领先AI算法能力，通过“公有云”形式，为客户提供“移动便捷、灵活部署和易用”的AIoT云应用功能，实现“通行、考勤、访客和人员管控”的一站式高效管理，释放效能让客户聚焦业务成功。'
      }
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
      let element = document.querySelector('#pc-product-software-banner')
      switch (val) {
        case 'citysafety':
          this.info = this.citysafety
          element.style.backgroundImage = `url('${require('@/assets/img/product/software/citysafety/bg_citysafety.jpg')}')`
          break
        case 'citygovernance':
          this.info = this.citygovernance
          element.style.backgroundImage = `url('${require('@/assets/img/product/software/citygovernance/bg_citygovernance.jpg')}')`
          break
        case 'robotwarehouse':
          this.info = this.robotwarehouse
          element.style.backgroundImage = `url('${require('@/assets/img/product/software/robotwarehouse/bg_robotwarehouse.jpg')}')`
          break
        case 'aiotviews':
          this.info = this.aiotviews
          element.style.backgroundImage = `url('${require('@/assets/img/product/software/aiotviews/bg_aiotviews.jpg')}')`
          break
        case 'aiotintelligence':
          this.info = this.aiotintelligence
          element.style.backgroundImage = `url('${require('@/assets/img/product/software/aiotintelligence/bg_aiotintelligence.jpg')}')`
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-product-software-banner {
  width: 100%;
  height: 360px;
  padding: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: left;
}
#pc-product-software-banner>b {
  display: block;
  width: 1200px;
  height: 100px;
  line-height: 60px;
  padding: 12px 0 28px 0;
  margin: 0 auto;
  font-size: 32px;
}
#pc-product-software-banner>p {
  display: block;
  width: 1200px;
  height: 196px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 28px;
  padding-right: 540px;
}
</style>