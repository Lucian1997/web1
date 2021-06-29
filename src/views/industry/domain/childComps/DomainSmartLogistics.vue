<template>
  <div id="pc-industry-domain-smartLogistics">
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
name: "DomainSmartLogistics",
  data() {
    return {
      list: [
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
    }
  }
}
</script>

<style scoped>
#pc-industry-domain-smartLogistics {
  width: 100%;
  padding: 80px 0;
  color: #333;
  text-align: center;
}

#pc-industry-domain-smartLogistics > b {
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