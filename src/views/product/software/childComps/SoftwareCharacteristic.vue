<template>
  <div id="pc-product-software-characteristic">
    <b>产品特点</b>
    <div class="characteristic-content">
      <div v-for="item in info" class="characteristic-content-item">
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
  name: "SoftwareCharacteristic",
  data() {
    return {
      info: [],
      citysafety: [
        {
          title: '全场景视图接入',
          desc: '支持按照国标、行标、企标、私有协议等将城市中各类视图传感设备统一接入管理、点位规划、智能运维',
          imgSrc: require('@/assets/img/product/software/citysafety/characteristic_1.png')
        },
        {
          title: '全目标解析',
          desc: '支持将接入视图资源中的人脸、人体、机动车、非机动车、车牌等全目标要素提取',
          imgSrc: require('@/assets/img/product/software/citysafety/characteristic_2.png')
        },
        {
          title: '统一数据中台',
          desc: '支持提供全目标数据关联、归档、挖掘、研判、检索、预警等全场景业务原子级数据应用，满足城市管理各场景组合应用',
          imgSrc: require('@/assets/img/product/software/citysafety/characteristic_3.png')
        },
        {
          title: '面向场景提供闭环应用',
          desc: '面向公共安全、城市管理、社区管理、交通管理等场景提供业务闭环场景应用',
          imgSrc: require('@/assets/img/product/software/citysafety/characteristic_4.png')
        }
      ],
      citygovernance: [
        {
          title: '物品识别',
          desc: '基于雅仕格Objects365通用物品检测数据集进行识别算法训练，可以对城市治理中常见的各类物品性目标进行识别，对城市治理问题精准定位',
          imgSrc: require('@/assets/img/product/software/citygovernance/characteristic_1.png')
        },
        {
          title: '非现场执法',
          desc: '平台业务涉及多种违法场景识别，能够按照严谨的违法行为定义进行识别报警，为执法部门提供完整的证据链条，实现非现场执法',
          imgSrc: require('@/assets/img/product/software/citygovernance/characteristic_2.png')
        },
        {
          title: '算法即插即用',
          desc: '采用雅仕格最新的算法仓技术，能够灵活匹配和定制各类多样化长尾识别算法，为城市治理部门提供各类应用场景的探索和接入',
          imgSrc: require('@/assets/img/product/software/citygovernance/characteristic_3.png')
        }
      ],
      robotwarehouse: [
        {
          title: '生态链接',
          desc: '将上游的业务系统与下游的各类机器控制本体和设备体系连接起来，具备强大的开放和可扩展性',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/characteristic_1.png')
        },
        {
          title: '协同智能',
          desc: '多设备在平台控制下协同作业，共同完成任务。在路径规划、库位优化、作业调度、负载均衡层提供了大量优化算法，以适配不同的业务场景',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/characteristic_2.png')
        },
        {
          title: '数字孪生',
          desc: '所画即所得，实现一站式解决规划、仿真、实施、部署的全流程。平台可以接入真实数据，进行全流程仿真模拟，从而实现线上的规划逼近真实的效率',
          imgSrc: require('@/assets/img/product/software/robotwarehouse/characteristic_3.png')
        }
      ],
      aiotviews: [
        {
          title: '无感通行',
          desc: '基于领先的人脸识别能力，让用户拥有极致的“无感”通行体验',
          imgSrc: require('@/assets/img/product/software/aiotviews/characteristic_1.png')
        },
        {
          title: '融合开放',
          desc: '具备优秀的开放性，拥有完整标准的功能API，通过该API，让合作伙伴和行业客户与各行业业务系统高效联接',
          imgSrc: require('@/assets/img/product/software/aiotviews/characteristic_2.png')
        },
        {
          title: '模块化架构',
          desc: '先进的软件架构设计，易拆分、易扩展、支持多种硬件平台部署模式',
          imgSrc: require('@/assets/img/product/software/aiotviews/characteristic_3.png')
        },
        {
          title: '大数据检索',
          desc: '基于自研AI算法能力，实现视频图片数据语义化，让用户可通过大数据属性和ReID高效检索',
          imgSrc: require('@/assets/img/product/software/aiotviews/characteristic_4.png')
        }
      ],
      aiotintelligence: [
        {
          title: '移动便捷',
          desc: '支持广泛的“端-边-云”便捷通信和交互，可通过小程序、网页端等进行管理，随时随地便捷管理',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/characteristic_1.png')
        },
        {
          title: '灵活部署',
          desc: '基于雅仕格自主研发的“感知设备和计算设备”智能硬件，为客户提供纯软云端部署模式的管理平台，可快速按需部署',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/characteristic_2.png')
        },
        {
          title: '高效管理',
          desc: '基于先进的AI算法能力，可实现“访客、员工和关键人员”批量管理。支持“远程开门、报表查询和记录管理”等丰富的应用功能',
          imgSrc: require('@/assets/img/product/software/aiotintelligence/characteristic_3.png')
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
          break
        case 'aiotintelligence':
          this.info = this.aiotintelligence
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-product-software-characteristic {
  width: 100%;
  height: 470px;
  background: #f2f3f5;
  color: #333;
  text-align: center;
  padding: 80px 0;
}
#pc-product-software-characteristic>b {
  display: block;
  font-size: 32px;
  height: 60px;
  line-height: 60px;
}
.characteristic-content {
  width: 1200px;
  height: 250px;
  padding-top: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.characteristic-content-item {
  width: 280px;
  height: 100%;
}
.characteristic-content-item>div {
  width: 80px;
  height: 90px;
  margin: 0 auto;
}
.characteristic-content-item>div img{
  width: 100%;
  height: 100%;
}
.characteristic-content-item>b {
  display: block;
  margin-top: 4px;
  font-size: 18px;
}
.characteristic-content-item>p {
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #666;
}
</style>