<template>
  <div>
    <!--移动端-->
    <div class="d-sm-none">
      <div id="mobile-record-number">
        <p>雅仕格（西安）科技有限公司</p>
        <p></p>
      </div>
    </div>
    <!--PC端-->
    <div class="d-none d-sm-block">
      <div id="pc-record-number">
        <p>雅仕格（西安）科技有限公司</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "RecordNumber"
}
</script>

<style scoped>
#mobile-record-number {
  width: 100%;
  height: 75px;
  background: #fff;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  padding: 16px 0;
  text-align: center;
}
#mobile-record-number p {
  color: #333;
  line-height: 20px;
  padding-bottom: 1px;
  font-size: 14px;
  margin: 0;
}
#pc-record-number {
  width: 1200px;
  height: 75px;
  background: #fff;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  padding: 16px 0;
  text-align: center;
}
#pc-record-number p {
  color: #333;
  line-height: 20px;
  padding-bottom: 1px;
  font-size: 14px;
  margin: 0;
}
</style>