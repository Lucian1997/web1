<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">
      <div id="mobileHeaderNav" class="mobile-nav">
        <div class="mobile-nav-logo"></div>
        <input type="checkbox" name="" id="mobileNav">
        <label for="mobileNav" @click="switchNav"></label>
        <ul class="mobile-tabs">
          <li id="tab1">
            <a href="javascript:;" @click="openTab('#tab1')">
              <div>核心技术</div>
              <div>
                <b-icon id="tab1_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
            </ol>
          </li>
          <li id="tab2">
            <a href="javascript:;" @click="openTab('#tab2')">
              <div>产品</div>
              <div>
                <b-icon id="tab2_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
            </ol>
          </li>
          <li id="tab3">
            <a href="javascript:;" @click="openTab('#tab3')">
              <div>解决方案</div>
              <div>
                <b-icon id="tab3_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
            </ol>
          </li>
          <li id="tab4">
            <a href="javascript:;" @click="openTab('#tab4')">
              <div>行业</div>
              <div>
                <b-icon id="tab4_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
            </ol>
          </li>
          <li id="tab5">
            <a href="javascript:;" @click="openTab('#tab5')">
              <div>开发者</div>
              <div>
                <b-icon id="tab5_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
            </ol>
          </li>
          <li id="tab6">
            <a href="javascript:;" @click="openTab('#tab6')">
              <div>关于雅仕格</div>
              <div>
                <b-icon id="tab6_icon" icon="chevron-down"></b-icon>
              </div>
            </a>
            <ol>
              <li><a href="javascript:;">公司介绍</a></li>
              <li><a href="javascript:;">新闻动态</a></li>
              <li><a href="javascript:;">联系我们</a></li>
              <li><a href="javascript:;">加入雅仕格</a></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="headerNav" class="pc-nav-init pc-nav">
        <ul>
          <li style="width: 152px;">
            <a href="/index">
              <div id="headerIcon" class="logo"></div>
            </a>
          </li>
          <li>
            <a href="javascript:;">核心技术</a>
            <ol>
              <li><a href="/technology/algorithm?name=face">核心算法</a></li>
            </ol>
          </li>
          <li>
            <a href="javascript:;">产品</a>
            <ol style="width: 260px;left: -72px;">
              <li><a href="/product/software?name=citysafety">城市公共安全综合软件平台</a></li>
              <li><a href="/product/software?name=citygovernance">城市治理综合软件平台</a></li>
              <li><a href="/product/software?name=robotwarehouse">机器人仓储物流软件平台</a></li>
              <li><a href="/product/software?name=aiotviews">AIoT视图综合应用平台</a></li>
              <li><a href="/product/software?name=aiotintelligence">AIoT智能物联商业云平台</a></li>
            </ol>
          </li>
          <li>
            <a href="javascript:;">解决方案</a>
            <ol>
              <li><a href="/iot/category?name=personal">消费物联网</a></li>
              <li><a href="/iot/category?name=city">城市物联网</a></li>
              <li><a href="/iot/category?name=supplychain">供应链物联网</a></li>
            </ol>
          </li>
          <li>
            <a href="javascript:;">行业</a>
            <ol>
              <li><a href="/industry/domain?name=consumerelectronics">消费电子</a></li>
              <li><a href="/industry/domain?name=iot">泛物联网</a></li>
              <li><a href="/industry/domain?name=smartcity">智慧城市</a></li>
              <li><a href="/industry/domain?name=smartlogistics">智慧物流</a></li>
            </ol>
          </li>
          <li>
            <a href="javascript:;">关于雅仕格</a>
            <ol>
              <li><a href="/company/introduce">公司介绍</a></li>
              <li><a href="/company/recruit">加入雅仕格</a></li>
            </ol>
          </li>
          <li>
            <div id="headerPhone">
              <i class="fa fa-phone fa-lg"></i>
              139-2226-2065
            </div>
          </li>
        </ul>
      </div>
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "HeaderNavBar",
  mounted() {
    let nav = document.querySelector('#headerNav')
    if (window.location.pathname === '/index') {
      window.onscroll = function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > (600 - 64)) {
          nav.classList.remove('pc-nav-init')
        } else {
          nav.classList.add('pc-nav-init')
        }
      }
    }else {
      nav.classList.remove('pc-nav-init')
    }
  },
  methods: {
    openTab(tabId) {
      let ol = document.querySelector(`${tabId}`)
      if (ol.classList.value === 'mobile-nav-li-active') {
        ol.classList.remove('mobile-nav-li-active')
      } else {
        ol.classList.add('mobile-nav-li-active')
      }
    },
    switchNav() {
      let tabs = document.querySelectorAll('.mobile-nav>ul>li')
      tabs.forEach(element => {
        let ol = document.querySelector(`#${element.id}`)
        ol.classList.remove('mobile-nav-li-active')
      })
    }
  }
}
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  z-index: 100;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
}

.mobile-nav-logo {
  position: absolute;
  width: 100%;
  height: 64px;
  margin: 0 0 0 16px;
  background-size: 126px 64px;
  background-repeat: no-repeat;
  background-image: url('~@/assets/img/logo/logo_hover.svg');
}

.mobile-nav input {
  display: none;
}

.mobile-nav label {
  position: absolute;
  top: calc(50% - 18px);
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid rgba(198, 217, 237, .3);
  cursor: pointer;
  transition: all .3s ease-out;
}

.mobile-nav label::before,
.mobile-nav label::after {
  content: '';
  position: absolute;
  left: 6px;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #0e57a2;
  transition: transform .2s ease-out, top .2s ease-out .2s;
}

.mobile-nav label::before {
  top: calc(50% - 5px);
}

.mobile-nav label::after {
  top: calc(50% + 5px);
}

.mobile-nav input:checked + label::before {
  top: calc(50% - 1px);
  transform: rotate(-45deg);
  transition: top .2s ease-out, transform .2s ease-out .2s;
}

.mobile-nav input:checked + label::after {
  top: calc(50% - 1px);
  transform: rotate(45deg);
  transition: top .2s ease-out, transform .2s ease-out .2s;
}

.mobile-tabs {
  height: calc(100vh - 64px);
  overflow-y: scroll;
}

.mobile-nav ul {
  position: relative;
  top: 64px;
  left: 0;
  width: 100%;
  padding-left: 0;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition: all .3s ease-out;
}


.mobile-nav ul li {
  width: 100%;
  height: auto;
  background: #fff;
}

.mobile-nav ul>li>a {
  display: flex;
  width: calc(100% - 64px);
  height: 100%;
  justify-content: space-between;
  line-height: 60px;
  font-weight: 700;
  text-decoration: none;
  color: #042a41;
  transition: transform .3s ease-out;
  margin: 0 32px;
  border-bottom: 1px solid rgba(140, 140, 140, .2);
}

.mobile-nav ul li>a div:first-child {
  font-size: 18px;
}

.mobile-nav input:checked ~ ul {
  opacity: 1;
  transform: scaleY(1);
}

.mobile-nav ul li ol {
  opacity: 0;
  height: 0;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition: all .3s ease-out;
}

.mobile-nav ul li ol li {
  line-height: 42px;
  font-size: 14px;
}

.mobile-nav ul li ol li a{
  display: block;
  width: calc(100% - 104px);
  margin: 0 52px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(140, 140, 140, .2);
  line-height: 42px;
  font-size: 14px;
}

.mobile-nav ul li ol li:last-child a {
  border: none;
}

.mobile-nav ul li>a div svg {
  transition: all .3s ease-out;
}

.mobile-nav-li-active>a {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 32px !important;
  background-color: #ecf6f8 !important;
  color: #0e57a2 !important;
  border: none !important;
}

.mobile-nav-li-active>a>div>svg {
  transform: rotate(180deg);
}

.mobile-nav-li-active>ol{
  opacity: 1 !important;
  height: inherit !important;
  transform: scaleY(1) !important;
}

.mobile-nav-li-active>ol li {
  background: #f9f9f9;
}

#headerNav {
  margin: 0 auto;
  min-width: 1160px;
}

#headerIcon {
  width: 100%;
  height: 64px;
  margin: 0;
  background-size: 126px 64px;
  background-repeat: no-repeat;
}

.logo {
  background-image: url('~@/assets/img/logo/logo.svg');
}

.pc-nav:hover ul li:first-child .logo {
  background-image: url('~@/assets/img/logo/logo_hover.svg');
}

#headerPhone {
  width: 180px;
  margin-left: 308px;
  line-height: 24px;
  padding: 20px 0;
  vertical-align: baseline;
}

.pc-nav-init {
  background-color: rgba(0, 0, 0, 0) !important;
}

.pc-nav {
  background-color: #000;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  transition: top .3s linear;
  height: 64px;
  line-height: 64px;
}

.pc-nav:hover {
  background-color: #fff !important;
  color: #000;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 14px;
}

.pc-nav ul {
  display: flex;
  width: 1160px;
  padding: 0;
  margin: 0 auto;
  height: 100%;
}

.pc-nav ul > li {
  width: 104px;
  text-align: center;
  position: relative;
}

.pc-nav ul > li:last-child {
  width: auto;
}

.pc-nav ul > li > a {
  font-weight: 600;
}

.pc-nav ul > li:hover > a {
  color: #0e57a2;
}

.pc-nav ul > li ol {
  position: absolute;
  top: 60px;
  left: -16px;
  background: #fff;
  padding: 18px 16px;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition: all .1s;
  width: 140px;
  line-height: 38px;
}

.pc-nav ul > li:hover ol {
  transform: scaleY(1);
}

.pc-nav ul > li ol li:hover{
  color: #0e57a2;
}



</style>