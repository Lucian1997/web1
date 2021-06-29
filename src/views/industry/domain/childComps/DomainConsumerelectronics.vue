<template>
  <div id="pc-industry-domain-consumerElectronics">
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
  name: "DomainConsumerelectronics",
  data() {
    return {
      list: [
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
      ]
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-consumerElectronics {
  width: 100%;
  padding: 80px 0;
  color: #333;
  text-align: center;
}

#pc-industry-domain-consumerElectronics > b {
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