<template>
  <div id="pc-industry-domain-iot">
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
  name: "DomainIot",
  data() {
    return {
      list: [
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
        }
      ]
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-iot {
  width: 100%;
  padding: 80px 0;
  color: #333;
  text-align: center;
}

#pc-industry-domain-iot > b {
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