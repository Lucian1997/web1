<template>
  <div id="pc-company-recruit-banner">
    <div>加入雅仕格</div>
  </div>
</template>

<script>
export default {
name: "RecruitBanner"
}
</script>

<style scoped>
#pc-company-recruit-banner {
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  position: relative;
}
#pc-company-recruit-banner>div:first-child {
  width: 100%;
  height: 380px;
  background: url("~@/assets/img/company/recruit/banner.jpg") center no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  padding-top: 140px;
  text-align: center;
}
</style>