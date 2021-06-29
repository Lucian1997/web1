<template>
  <div id="pc-industry-domain-insight">
    <b>行业洞察</b>
    <div class="insight-content">
      <div v-for="item in info" class="insight-content-item">
        <div>
          <img :src="item.imgSrc" alt="">
        </div>
        <b>{{item.title}}</b>
        <p>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DomainInsight",
  data() {
    return {
      info: [],
      consumerelectronics: [
        {
          title: '智能化向更广领域蔓延',
          desc: 'AR/VR、可穿戴设备、汽车电子、智能家居、智能大屏等智能终端不断涌现，设备之间的互联互通成为新命题',
          imgSrc: require('@/assets/img/industry/domain/consumerElectronics/insight_1.png')
        },
        {
          title: '使用体验更加智慧化',
          desc: '应用体验向智慧化和无感化发展，在“视图拍摄、续航能力、通讯质量和隐私安全”等方面尤为被关注',
          imgSrc: require('@/assets/img/industry/domain/consumerElectronics/insight_2.png')
        },
        {
          title: '创新驱动智能设备发展',
          desc: '行业集中度不断提升，创新引领的高端智能设备将成为突破存量市场的关键突破口',
          imgSrc: require('@/assets/img/industry/domain/consumerElectronics/insight_3.png')
        }
      ],
      iot: [
        {
          title: '虚拟与现实的边界融合消失',
          desc: '互联网加速融入线下，与实体经济结合。VR/AR、AI、物联网等技术加快推进，虚拟与现实服务的边界正在消失，泛互联网应用无处不在',
          imgSrc: require('@/assets/img/industry/domain/iot/insight_1.png')
        },
        {
          title: '服务个性化，体验新升级',
          desc: '基于用户画像挖掘用户需求，从而提供个性化、精细化的服务，全面提升互联网产品的使用体验',
          imgSrc: require('@/assets/img/industry/domain/iot/insight_2.png')
        },
        {
          title: '从数字化向智能化迈进',
          desc: '机器学习技术加速互联网向下一阶段演进，以AI为主要推动力，促使泛互联网从数字化向智能化服务迈进',
          imgSrc: require('@/assets/img/industry/domain/iot/insight_3.png')
        }
      ],
      smartcity: [
        {
          title: '系统改善城市管理命题',
          desc: '集中创新应用“人工智能、大数据、云计算、物理网和5G”等新型ICT技术，从“人-物-空间-安全”多维度，系统改善城市管理',
          imgSrc: require('@/assets/img/industry/domain/smartCity/insight_1.png')
        },
        {
          title: '多领域数据融合应用',
          desc: '打破异构数据孤岛，走向多领域数据融合，真正融合发掘城市数据价值，成为核心命题',
          imgSrc: require('@/assets/img/industry/domain/smartCity/insight_2.png')
        },
        {
          title: '提升城市公民生活质量',
          desc: '挖掘并读懂城市数据，以人为中心，应对安全隐患、提升城市治理质量、交通效率和居住环境是城市管理者的根本命题',
          imgSrc: require('@/assets/img/industry/domain/smartCity/insight_3.png')
        }
      ],
      smartlogistics: [
        {
          title: '智慧+协同新生态',
          desc: '未来，智慧物流将以操作系统基础，通过协同共享创新模式，重塑产业分工，再造产业结构，转变产业发展方式的新生态',
          imgSrc: require('@/assets/img/industry/domain/smartLogistics/insight_1.png')
        },
        {
          title: '流通方式深刻改变',
          desc: '从数据发掘出发的“业务模式和智能化”将从底层深刻改变“生产和流通”方式，助推供应链管理升级，促进仓储物流产业结构新转变',
          imgSrc: require('@/assets/img/industry/domain/smartLogistics/insight_2.png')
        },
        {
          title: '智能装备和系统产品标准化',
          desc: '行业竞争格局已从“技术和产品”，延伸至“应用和服务”象限。未来，以机器人为代表的物流智能装备和系统产品，将会向标准化演变，服务行业',
          imgSrc: require('@/assets/img/industry/domain/smartLogistics/insight_3.png')
        }
      ]
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
      switch (val) {
        case 'consumerelectronics':
          this.info = this.consumerelectronics
          break
        case 'iot':
          this.info = this.iot
          break
        case 'smartcity':
          this.info = this.smartcity
          break
        case 'smartlogistics':
          this.info = this.smartlogistics
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-insight {
  width: 100%;
  height: 470px;
  background: #f2f3f5;
  color: #333;
  text-align: center;
  padding: 80px 0;
}

#pc-industry-domain-insight > b {
  display: block;
  font-size: 32px;
  height: 60px;
  line-height: 60px;
}

.insight-content {
  width: 1200px;
  height: 250px;
  padding-top: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.insight-content-item {
  width: 280px;
  height: 100%;
}

.insight-content-item > div {
  width: 80px;
  height: 90px;
  margin: 0 auto;
}

.insight-content-item > div img {
  width: 100%;
  height: 100%;
}

.insight-content-item > b {
  display: block;
  margin-top: 4px;
  font-size: 18px;
}

.insight-content-item > p {
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #666;
}
</style>