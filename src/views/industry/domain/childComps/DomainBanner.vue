<template>
  <div id="pc-industry-domain-banner">
    <b>{{info.title}}</b>
    <p>{{info.desc}}</p>
  </div>
</template>

<script>
export default {
  name: "DomainBanner",
  data() {
    return {
      info: {
        title: '',
        desc: ''
      },
      consumerelectronics: {
        title: '消费电子',
        desc: '信息技术的生命周期正逐年缩短。在“新技术集中应用、消费格局转变和智能设备普及”等因素综合影响下，消费电子产品从电子化、联网化正向“智能化及智慧化”演变，速度明显加快，新应用也在不断涌现。'
      },
      iot: {
        title: '泛互联网',
        desc: '互联网+成为影响人们生活方式，重塑生产力和生产关系的内生变量。全球互联网生态，正在加速迈入“智能融合”新周期。未来，全维感知、自然交互和智能融合成为下一代互联网的战略方向。'
      },
      smartcity: {
        title: '智慧城市',
        desc: '随着人口迁徙和汇聚，城市群逐渐呈现，给城市管理者带来了前所未有的挑战，面对“人、物和空间”的大规模综合体城市，雅仕格始终坚持“利民为本”的中心原则，致力于推动新型城市的“社会稳定、政务治理和产业升级”向高质量、高效率迈进，加速智慧城市建设，让城市更宜居。'
      },
      smartlogistics: {
        title: '智慧物流',
        desc: '物流作为融合“信息、运输、仓储、园区、邮政、制造和供应链”等的复合型产业，近年备受关注。随着智能化应用落地和政策文件的广泛支撑，新技术正在深刻重塑物流产业。人工智能、物联网、自动驾驶、柔性机器人及智能装备交相呼应，如火如荼地为物流产业注入科技力量，培育生态协同的优渥土壤。'
      }
    }
  },
  props: {
    domain: {
      type: String,
      default: ''
    }
  },
  watch: {
    domain(val) {
      let element = document.querySelector('#pc-industry-domain-banner')
      switch (val) {
        case 'consumerelectronics':
          this.info = this.consumerelectronics
          element.style.backgroundImage = `url('${require('@/assets/img/industry/domain/consumerElectronics/bg_consumerelectronics.jpg')}')`
          break
        case 'iot':
          this.info = this.iot
          element.style.backgroundImage = `url('${require('@/assets/img/industry/domain/iot/bg_iot.jpg')}')`
          break
        case 'smartcity':
          this.info = this.smartcity
          element.style.backgroundImage = `url('${require('@/assets/img/industry/domain/smartCity/bg_smartcity.jpg')}')`
          break
        case 'smartlogistics':
          this.info = this.smartlogistics
          element.style.backgroundImage = `url('${require('@/assets/img/industry/domain/smartLogistics/bg_smartlogistics.jpg')}')`
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-banner {
  width: 100%;
  height: 360px;
  padding: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
}
#pc-industry-domain-banner>b {
  display: block;
  width: 1200px;
  height: 100px;
  line-height: 60px;
  padding: 12px 0 28px 0;
  margin: 0 auto;
  font-size: 32px;
}
#pc-industry-domain-banner>p {
  display: block;
  width: 780px;
  height: 196px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 28px;
}
</style>