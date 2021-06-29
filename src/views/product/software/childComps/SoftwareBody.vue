<template>
  <div id="pc-product-software-body">
    <b>平台概览</b>
    <div>
      <img  v-if="imgSrc!=''" :src="require(`../../../../assets/img/product/software/${imgSrc}`)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareBody",
  data() {
    return {
      imgSrc: ''
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
          this.imgSrc = 'citysafety/citysafety.jpg'
          break
        case 'citygovernance':
          this.imgSrc = 'citygovernance/citygovernance.jpg'
          break
        case 'robotwarehouse':
          this.imgSrc = 'robotwarehouse/robotwarehouse.jpg'
          break
        case 'aiotviews':
          this.imgSrc = 'aiotviews/aiotviews.jpg'
          break
        case 'aiotintelligence':
          this.imgSrc = 'aiotintelligence/aiotintelligence.jpg'
          break
      }
    }
  }
}
</script>

<style scoped>
#pc-product-software-body {
  width: 100%;
  padding: 80px 0;
  text-align: center;
  color: #333;
}
#pc-product-software-body>b {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
}
#pc-product-software-body>div {
  width: 1200px;
  height: 540px;
  margin: 0 auto;
  padding: 40px 0 20px 0;
}
#pc-product-software-body>div img {
  width: 100%;
  height: 100%;
}
</style>