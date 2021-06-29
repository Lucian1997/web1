<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">

    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div class="bg"></div>
      <div id="pc-contact">
        <b>联系我们，获取尊享服务</b>
        <p>专业的产品介绍，一对一的客户服务</p>
        <a href="javascript:;" class="contact-button">
          联系我们
        </a>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
export default {
name: "ContactUs"
}
</script>

<style scoped>
#pc-contact {
  width: 100%;
  height: 260px;
  padding: 50px 0;
  position: relative;
  background: transparent;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
  background-image: url('~@/assets/img/home/contact/bg_map.jpg');
  background-repeat: no-repeat;
  background-size: auto;
  object-fit: scale-down;
}
#pc-contact b,
#pc-contact p,
#pc-contact a{
  display: block;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
#pc-contact b {
  height: 50px;
  line-height: 50px;
  font-size: 36px;
  color: #333;
  font-weight: normal;
  margin-top: 10px;
}
#pc-contact p {
  margin-top: 10px;
}
.contact-button {
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 180px !important;
  height: 46px;
  line-height: 46px;
  background: rgba(0,0,0,0);
  color: #0e57a2;
  border: 1px solid rgba(14, 87, 162, .2);
  border-radius: 2px;
  transition: all .3s ease;
}
.contact-button:hover {
  background: rgba(14, 87, 162, .1);
}
</style>