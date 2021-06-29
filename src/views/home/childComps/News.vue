<template>
  <div>
    <!--移动端-->
    <!--<div class="d-sm-none">

    </div>
    &lt;!&ndash;PC端&ndash;&gt;
    <div class="d-none d-sm-block">-->
      <div id="pc-news">
        <b class="news-title">新闻动态</b>
        <div class="news-tabs">
          <div class="news-tabs-item" id="newsId1">
            <div class="news-image">
              <img src="~assets/img/home/news/news1.jpg" alt="">
            </div>
            <div class="news-body">
              <b>AI赋能、软硬一体、整仓集成，雅仕格...</b>
              <p>2021-05-07</p>
              <div class="news-body-key">
                <div>雅仕格</div>
                <div>软硬一体</div>
              </div>
            </div>
          </div>
          <div class="news-tabs-item" id="newsId2">
            <div class="news-image">
              <img src="~assets/img/home/news/news2.jpg" alt="">
            </div>
            <div class="news-body">
              <b>旗舰项目孵化核心产品：雅仕格智慧园...</b>
              <p>2021-05-07</p>
              <div class="news-body-key">
                <div>雅仕格</div>
                <div>智慧物流</div>
              </div>
            </div>
          </div>
          <div class="news-tabs-item" id="newsId3">
            <div class="news-image">
              <img src="~assets/img/home/news/news3.jpg" alt="">
            </div>
            <div class="news-body">
              <b>雅仕格与行业大咖探讨开源开放之道</b>
              <p>2021-05-07</p>
              <div class="news-body-key">
                <div>雅仕格</div>
                <div>开源</div>
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:;" class="news-button">
          更多新闻
        </a>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
export default {
  name: "News"
}
</script>

<style scoped>
#pc-news {
  width: 100%;
  height: 536px;
  background: #efefef;
  padding: 50px 0;
  position: relative;
}
.news-title {
  display: block;
  width: 1200px;
  height: 80px;
  line-height: 40px;
  padding: 16px 0 24px 0;
  margin: 0 auto;
  font-size: 36px;
  color: #0a2349;
  text-align: center;
}
.news-tabs {
  display: flex;
  width: 1200px;
  height: 280px;
  margin: 0 auto;
  justify-content: space-between;
}
.news-tabs-item {
  width: 380px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.news-image {
  width: 100%;
  height: 160px;
  position: relative;
  transition: all .3s ease-out;
}
.news-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 380px;
  height: 160px;
  transition: all .3s ease-out;
}
.news-body {
  position: absolute;
  bottom: -40px;
  width: 100%;
  height: 160px;
  padding: 28px 16px 0 16px;
  transition: all .3s ease-out;
  background: #fff;
}
.news-body p{
  font-size: 14px;
  margin-top: 4px;
  color: #999;
}
.news-body-key {
  display: flex;
}
.news-body-key div{
  overflow: hidden;
  border-radius: 2px;
  padding: 4px 8px;
  height: 24px;
  line-height: 16px;
  font-size: 12px;
  color: #666;
  background: #f8f8f8;
  margin-right: 8px;
  opacity: 0;
  transition: all .3s ease-out;
}
.news-tabs-item:hover .news-image {
  height: 120px;
}
.news-tabs-item:hover .news-image img {
  top: -20px;
}
.news-tabs-item:hover .news-body {
  bottom: 0;
}
.news-tabs-item:hover .news-body-key div {
  opacity: 1;
}
.news-button {
  position: absolute;
  top: 440px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 180px;
  height: 46px;
  line-height: 46px;
  background: rgba(0,0,0,0);
  color: #0e57a2;
  border: 1px solid rgba(14, 87, 162, .2);
  border-radius: 2px;
  transition: all .3s ease;
}
.news-button:hover {
  background: rgba(14, 87, 162, .1);
}
</style>