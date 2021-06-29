<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">

    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="pc-footer">
        <div class="footer-info">
          <div class="footer-intro">
            <div class="footer-intro-logo"></div>
            <p>西安市雁塔区科技路38号林凯国际大厦701</p>
            <p>
              <a href="javascript:;" style="font-size: 12px">免责声明</a>丨
              <a href="javascript:;" style="font-size: 12px">隐私政策</a>丨
              <a href="javascript:;" style="font-size: 12px">正确使用人工智能产品倡议书</a>
            </p>
          </div>
          <div class="footer-contact">
            <b>联系我们</b>
            <p>售前咨询：  13922262065</p>
            <p>售后服务：  18666956683</p>
            <p>商务合作：  arshcoo@163.com</p>
            <p>供应商合作：  arshcoo@163.com</p>
            <p>建议及反馈邮箱：  arshcoo@163.com</p>
            <p>安全问题反馈邮箱：  arshcoo@163.com</p>
          </div>
          <div class="footer-href">
            <b>相关链接</b>
            <p><a href="javascript:;">Ar++</a></p>
            <p><a href="javascript:;">MegEngine</a></p>
            <p><a href="javascript:;">MegStudio</a></p>
            <p><a href="javascript:;">Face++</a></p>
            <p><a href="javascript:;">FaceID</a></p>
          </div>
          <div class="footer-recruit">
            <b>招聘</b>
            <p><a href="/company/recruit">社会招聘</a></p>
            <p><a href="/company/recruit">校园招聘</a></p>
            <div class="footer-support">
              <b>售后与支持</b>
              <p><a href="javascript:;">售后支持</a></p>
            </div>
          </div>
        </div>
        <div class="footer-others">
          <div class="qq"></div>
          <div class="wechat"></div>
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>
#pc-footer {
  width: 100%;
  /*height: 450px;*/
  background: #fff;
  padding: 50px 0;
}
.footer-info {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  height: calc(100% - 34px);
}
.footer-intro {
  width: 400px;
  height: calc(100% - 34px);
  padding-right: 50px;
}
.footer-intro a,
.footer-support a{
  color: inherit;
}
.footer-intro p,
.footer-contact p,
.footer-href p,
.footer-recruit p,
.footer-support p{
  font-size: 14px;
  color: #333;
}
.footer-intro-logo {
  width: 100%;
  height: 60px;
  background-image: url('~@/assets/img/logo/logo_hover.svg');
  background-repeat: no-repeat;
  background-size: 160px 60px;
  margin-bottom: 20px;
}
.footer-contact b,
.footer-href b,
.footer-recruit b,
.footer-support b{
  display: block;
  width: 100%;
  height: 60px;
  line-height: 32px;
  padding: 14px 0;
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
}
.footer-contact {
  width: 400px;
  height: calc(100% - 34px);
  padding-right: 50px;
}
.footer-href {
  width: 200px;
  height: calc(100% - 34px);
  padding-right: 50px;
}
.footer-recruit {
  width: 200px;
}
.footer-others {
  width: 1200px;
  height: 34px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding-right: 50px;
}
.footer-others div{
  width: 22px;
  height: 22px;
  margin: 6px;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  cursor: pointer;
}
.qq {
  background-image: url('~@/assets/img/footer/qq.svg');
}
.wechat {
  background-image: url('~@/assets/img/footer/wechat.svg');
}
</style>