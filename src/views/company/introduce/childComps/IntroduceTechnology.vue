<template>
  <div id="pc-company-introduce-technology">
    <div class="company-introduce-technology-body">
      <div class="introduce-technology-image"></div>
      <div class="introduce-technology-content">
        <b>备受认可的技术实力</b>
        <p>
          雅仕格拥有领先的计算机视觉技术。我们的团队开发出了先进的算法，对我国人工智能产业的发展和技术应用的深入落地有着极大推动作用。
          <br><br><br>
          新一代 AI 平台，综合运用了大数据、人工智能和云计算等技术，可以帮助企业快速高效地建立企业内的AI基础设施，以更少的人力和更短的时间开发出各种新算法，满足行业长尾需求。
        </p>
        <a href="/" class="btn">了解AI</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroduceTechnology"
}
</script>

<style scoped>
#pc-company-introduce-technology {
  width: 100%;
  height: 650px;
  background: #fff;
  padding: 80px 0;
}

.company-introduce-technology-body {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}

.introduce-technology-image {
  position: relative;
  width: 700px;
  height: 490px;
  background: url('~@/assets/img/company/introduce/technology.jpg') no-repeat;
  background-size: cover;
  opacity: 0;
}
.introduce-technology-content {
  width: 500px;
  height: 490px;
  padding: 56px 0;
}
.introduce-technology-content b {
  display: block;
  font-size: 32px;
  margin-bottom: 20px;
}
.introduce-technology-content p {
  text-align: justify;
  font-size: 14px;
  margin-bottom: 36px;
}
</style>