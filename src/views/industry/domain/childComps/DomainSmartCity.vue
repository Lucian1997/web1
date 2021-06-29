<template>
  <div id="pc-industry-domain-smartCity">
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
  name: "DomainSmartCity",
  data() {
    return {
      list: [
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
        }
      ]
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-smartCity {
  width: 100%;
  padding: 80px 0;
  color: #333;
  text-align: center;
}

#pc-industry-domain-smartCity > b {
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