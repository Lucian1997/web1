<template>
  <div id="pc-iot-category-body">
    <b>行业解决方案</b>
    <div class="body-solutions">
      <div v-for="item in list" class="body-solutions-item">
        <div class="item-image">
          <img :src="item.img" alt="">
        </div>
        <div class="item-info">
          <b>{{ item.title }}</b>
          <p>{{ item.desc }}</p>
          <div class="item-info-key">
            <div v-for="kItem in item.key">
              {{ kItem }}
            </div>
          </div>
          <a class="btn" :href="item.href">了解详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IotCategoryBody",
  data() {
    return {
      list: [],
      solutions: [
        [
          {
            title: '计算摄影解决方案',
            desc: '近年，随着“换机红利、技术红利和消费红利”的消散，以智能手机为代表的智能设备集体迈进“红利消退期”，产品同质化严重，新机不再酷。AI和5G的前夜，在“影像处理、影像画质、多摄拍摄和视频录制”等方面的提升，成为业界新的发力点。',
            key: [
              'AI降噪',
              '多摄虚化',
              '夜景超画质',
              '视频虚化'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_1.jpg'),
            href: 'javascript:;'
          },
          {
            title: '设备安全解决方案',
            desc: '以智能手机为代表的智能设备，已成为人们生活的必备物品，肩负“身体、感官”延伸的作用，不可或缺。如今，移动支付、线上购物和智能办公，逐渐发展为生活常态。智能设备作为核心载体，基于“人脸和指纹”的系统解锁、应用解锁和支付认证被提出更为苛刻的安全应用要求。',
            key: [
              '毫秒级解锁',
              '金融级安全支付',
              '适配性广泛',
              '便捷极速体验'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_2.jpg'),
            href: 'javascript:;'
          },
          {
            title: 'FaceID人脸核身解决方案',
            desc: '互联网+，尤其是“移动互联网”的兴起，给人们生活带来了巨大变化，以“业务线上化”为代表的新业态，在线“身份核验”成为不可缺少的关键环节。同时，以“AI技术”为驱动力，形成了一套基于“人脸识别、活体检测和人脸比对”的验证方案，作为主流解决方案被广泛应用。',
            key: [
              '极高的算法精度',
              '全面的功能形态',
              '灵活的场景方案',
              '实时的模型升级'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_3.jpg'),
            href: 'javascript:;'
          },
          {
            title: 'FaceStyle美业解决方案',
            desc: '“Z世代”跃迁为新锐消费群体，消费观念和方式也在不断改变，以“美妆和医美”行业为代表的业态，也在发生深刻改变。面临着“营销同质化、流量转化低、产品体验成本高和购买体验差”等一系列的挑战，亟需AI技术创新应用为“人-货-场”环节的联结带来新的方式。',
            key: [
              '真：真实还原',
              '准：精准分析',
              '简：简单集成',
              '全：形态丰富'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_4.jpg'),
            href: 'javascript:;'
          },
          {
            title: '数据和数字化服务解决方案',
            desc: '雅仕格Data++凭借在AI领域的技术积累，自研“越影数据服务平台”，在计算机视觉、自然语言处理、智能语音及自动驾驶等领域，为客户提供数据咨询服务，数据生产、清洗、标注和业务数字化的整合解决方案。同时，Data++的数据服务一直严格遵守个人信息与隐私保护相关法律法规，采用加密传输等措施确保数据安全。',
            key: [
              '数据安全',
              '数据隐私保护',
              '质量和规模',
              '平台整合驱动'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_5.jpg'),
            href: 'javascript:;'
          },
          {
            title: '泛娱乐增强体验解决方案',
            desc: '移动互联网环境下，用户更加追求细节的极致体验，在物质生活丰裕的时代，服务业引领的“娱乐经济”越来越重要。新技术在不同业态间的创新应用，实现“自由链接”，汇聚成网，释放了更大的产业价值。',
            key: [
              '隐私性强',
              '算法技术领先',
              '完善的服务体系',
              '完整的产品体系'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_6.jpg'),
            href: 'javascript:;'
          },
          {
            title: '在线营销解决方案',
            desc: '近年来，场景化和互动化逐渐成为数字营销新的发展方向，AI的加持让原本单方面静态的营销方式转化为生动鲜活、双向互动的营销模式。赋能传统营销范式的同时，通过“精准分析”，在业务场景、用户圈层和产品营销环节触达目标用户，实现品效合一的营销转化。',
            key: [
              '受众分析，个性化营销',
              '趣味游戏，创意营销',
              '算法领先，效果可靠',
              '安全保障，隐私性强'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_7.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧屏及智能电视解决方案',
            desc: '家庭娱乐和教育生活类应用需求的增加，促使“智能电视”作为新的产品界面链接家庭生活。近两年，传统ICT、互联网和电视厂相继进入新型智慧家居市场，推动新业态生长，通过支持“运动健康、互娱和教育”类应用，推动智能家电互联互通。',
            key: [
              '算法效果业界领先',
              '适配性广泛',
              '"算法+芯片+模组"的整体方案'
            ],
            img: require('@/assets/img/iot/category/solutions/personal_8.jpg'),
            href: 'javascript:;'
          }
        ],
        [
          {
            title: '智慧城市治理综合解决方案',
            desc: '智慧城市治理是国家治理体系的重要组成部分，运用大数据、云计算、区块链、人工智能等前沿技术推动城市管理手段、管理模式和管理理念创新。从数字化到智能化再到智慧化，让城市更聪明、更智慧，是推动城市治理体系和治理能力现代化的必由之路。',
            key: [
              '疫情精准防控能力',
              '物联网融合感知能力',
              '智能视频分析能力',
              '大数据精细化治理能力'
            ],
            img: require('@/assets/img/iot/category/solutions/city_1.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧公共安全综合解决方案',
            desc: '快速的城市化进程，对城市“民生服务和公共安全”模式提出了新的挑战。城市公共安全管理部门亟需对城市感知能力和信息分析处理能力进行升级，打通信息壁垒，构建强化安全的社会公众环境，推动民生服务和社会安全防控体系的深度融合发展。',
            key: [
              '海量前端全域感知',
              '数据融合释放价值',
              '场景共享业务闭环',
              '智能平台自我演进'
            ],
            img: require('@/assets/img/iot/category/solutions/city_2.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智能交通综合解决方案',
            desc: '近年国家政策明确指向交通发展由追求速度规模向注重质量效益转变，面对由“人、车、路和环境”等元素组成开放、复杂、动态综合的道路交通系统，交通管理工作将依托于人工智能、大数据、互联网、区块链、超级计算等新技术与交通行业的深度融合，构建综合交通大数据中心体系，推进数据赋能交通发展，不断提升交通管理现代化治理能力。',
            key: [
              '全域数据感知',
              'AI算法赋能',
              '精准交通管理',
              '多元交通服务'
            ],
            img: require('@/assets/img/iot/category/solutions/city_3.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧机场解决方案',
            desc: '近年，基于“人工智能、云计算、大数据和物联网”为主的新型信息技术，驱动传统机场向智慧化迈进，已成为新趋势。未来，机场将拥有“感知-分析-思考-反馈”能力，“运行效率、安全保障和科学决策”等方面将会全面智慧升级。',
            key: [
              '核心算法领先',
              '算法硬件融合',
              '联合平台建设',
              '合作赋能提效'
            ],
            img: require('@/assets/img/iot/category/solutions/city_4.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧楼宇通行解决方案',
            desc: '随着AIoT的发展，楼宇建设正在从数字化向智能化转型。在数字化时代，传统楼宇通常使用一卡通进行人员进出管理。然而，由于卡的易代刷、易伪造、易丢失等问题，已经无法适应智能化时代的楼宇通行场景。人脸作为天然的 ID，正在逐步替代卡，实现安全、高效的全楼通行体验。',
            key: [
              '多形态',
              '全场景',
              '算法强',
              '易集成'
            ],
            img: require('@/assets/img/iot/category/solutions/city_5.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧园区解决方案',
            desc: '园区作为衔接“楼宇和城市”的中间界面，肩负着将“单点建筑”汇聚成线，并最终构建“城市空间”的使命。与此同时，园区也是“工作与生活”的综合载体，体现着“技术创新”的变革应用和“经济社会”的融合发展。',
            key: [
              '多维感知，全面互联',
              '智能产品，软硬兼备',
              '便捷管理，人性服务',
              '效率为先，降本增效'
            ],
            img: require('@/assets/img/iot/category/solutions/city_6.jpg'),
            href: 'javascript:;'
          }
        ],
        [
          {
            title: '智慧物流园区解决方案',
            desc: '无论是商品的流转，还是场内场外的车辆人员流动。智慧物流园区已经超出了“四堵墙”的范畴，需要连接更多的场景、需要更智能的调度和预测，甚至能自动决策。在提高效率的同时，还要提高安全性。',
            key: [
              '轻资产投入',
              '轻流程再造',
              '高度协同',
              '效率与安全并重'
            ],
            img: require('@/assets/img/iot/category/solutions/supplychain_1.jpg'),
            href: 'javascript:;'
          },
          {
            title: '智慧仓储解决方案',
            desc: '从按订单生产到即时消费、即时物流，以“智能仓储、无人配送和物流机器人”等为代表的智慧物流技术，将成为智能工厂与智能物流中心的核心要素，助力仓储、物流、制造和供应链，迈进“数字化、智能化和智慧化”。',
            key: [
              '全生命周期管理',
              '人机协同，群智开放',
              '自研创新，共享生态'
            ],
            img: require('@/assets/img/iot/category/solutions/supplychain_2.jpg'),
            href: 'javascript:;'
          }
        ]
      ]
    }
  },
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.switchCategory(this.category)
  },
  methods: {
    switchCategory(val) {
      switch (val) {
        case 'personal':
          this.list = this.solutions[0]
          break
        case 'city':
          this.list = this.solutions[1]
          break
        case 'supplychain':
          this.list = this.solutions[2]
          break
      }
    }
  },
  watch: {
    category(val) {
      this.switchCategory(val)
    }
  }
}
</script>

<style scoped>
#pc-iot-category-body {
  width: 100%;
  padding: 80px 0;
  color: #333;
  text-align: center;
}

#pc-iot-category-body > b {
  font-size: 32px;
}

.body-solutions {
  padding-top: 36px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.body-solutions-item {
  padding: 40px;
  width: 1200px;
  height: 380px;
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  background: rgba(236, 242, 248, .4);
  border-radius: 4px;
}

.body-solutions-item:hover {
  box-shadow: 0 0 10px 0 rgba(49, 102, 156, .33);
}

.item-image {
  width: 450px;
  height: 100%;
}

.item-image img {
  width: 100%;
  height: 100%;
}

.item-info {
  width: 580px;
  height: 100%;
  text-align: left;
}

.item-info > b {
  display: block;
  line-height: 28px;
  font-size: 24px;
  margin: 16px 0 14px 0;
  font-weight: normal;
}

.item-info > p {
  font-size: 14px;
  line-height: 24px;
}

.item-info-key {
  margin: 18px 0;
  display: flex;
  flex-wrap: wrap;
}

.item-info-key > div {
  height: 32px;
  line-height: 32px;
  padding-left: 16px;
  margin-right: 48px;
  position: relative;
}

.item-info-key > div:before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  background-color: #0e57a2;
}
</style>