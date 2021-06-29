<template>
  <div id="pc-technology-algorithm-body">
    <div class="body-header">
      <div class="body-header-tabs">
        <a href="/technology/algorithm?name=face">
          <div>人脸识别</div>
        </a>
        <a href="/technology/algorithm?name=video">
          <div>视频结构化</div>
        </a>
        <a href="/technology/algorithm?name=camera">
          <div>智能计算摄像学</div>
        </a>
        <a href="/technology/algorithm?name=sensor">
          <div>智能视觉传感器增强</div>
        </a>
        <a href="/technology/algorithm?name=robot">
          <div>机器人导航与定位</div>
        </a>
      </div>
      <div class="body-header-desc">
        {{ info.desc }}
      </div>
    </div>
    <div class="body-content">
      <div v-for="item in info.list" class="body-content-card">
        <div class="card-title">
          {{item.title}}
        </div>
        <div class="card-desc">
          {{item.desc}}
        </div>
        <div class="card-image">
          <img :src="item.imgSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlgorithmBody",
  data() {
    return {
      info: {
        desc: '',
        list: []
      },
      face: {
        desc: '雅仕格人脸识别技术基于深度学习、海量数据以及自研MegEngine开源框架，深度结合落地场景，技术覆盖人脸/人体检测、跟踪、关键点定位、人脸识别、人脸聚类、大规模检索、活体判断、人脸属性等，为城市治理、公共安全、楼宇园区管理、实名认证、通行考勤等业务场景提供高效、准确的技术。',
        list: [
          {
            title: '人脸/人体检测',
            desc: '基于多年行业的深度技术积淀，雅仕格人脸检测能力覆盖复杂光线、人脸遮挡、人脸大角度、快速运动等诸多复杂环境，支持云、边、端的多平台解决方案，实现高效、精确、稳定的人脸检测功能。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_1.jpg')
          },
          {
            title: '人脸识别',
            desc: '雅仕格人脸识别能力超越人眼，支持多属性、全年龄段、复杂环境的精准识别，毫秒级响应，覆盖云、边、端的多平台解决方案，场景覆盖从手机解锁、门禁考勤到公共安全管理，为行业提供准确、快速、高效的人脸识别功能。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_2.jpg')
          },
          {
            title: '年龄性别识别',
            desc: '基于人脸支持自然环境下的准确年龄性别估计，年龄误差在+/- 5年，性别准确率>99%。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_3.jpg')
          },
          {
            title: '人脸属性识别',
            desc: '支持自然环境下的准确人脸属性检测（发型、胡子、帽子、口罩、眼睛），准确率>97%。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_4.jpg')
          },
          {
            title: '人脸检索',
            desc: '基于自研的高效图近似搜索算法，提供高效的百亿人脸检索方案，毫秒级响应，精准定位。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_5.jpg')
          },
          {
            title: '人脸聚变',
            desc: '基于自研的图聚类算法，提供高效准确的人脸聚类算法，面向多种不同应用场景，小到相册聚类，大到城市级分析和分析。',
            imgSrc: require('@/assets/img/technology/algorithm/face/card_6.jpg')
          }
        ]
      },
      video: {
        desc: '在各类视频中“人和车辆”往往是视频内容的主体，雅仕格的视频结构化系统聚焦于对人员、车辆及其行为的全方位信息识别，在视频中把人或车辆作为可描述的个体展现出来。',
        list: [
          {
            title: '全目标检测跟踪',
            desc: '实现了对高帧率、低帧率和超低帧率的目标跟踪，可以自适应调节跟踪参数，平衡处理速度和算法精度。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_1.jpg')
          },
          {
            title: '人体骨骼关键点定位',
            desc: '支持14点、17点、22点以及88点2D人体关键点检测。支持14点3D人体关键点检测。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_2.jpg')
          },
          {
            title: '人体Re-ID',
            desc: '支持不同方向，不同姿态，不同光照，不同天气以及不同遮挡程度下的ReID能力。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_3.jpg')
          },
          {
            title: '车牌识别',
            desc: '支持世界各国车牌的识别和各地非机动车车牌的识别。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_4.jpg')
          },
          {
            title: '车辆品牌识别',
            desc: '支持3000+车辆品牌的识别和正面、背面和侧面的车辆品牌识别。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_5.jpg')
          },
          {
            title: '三维定位',
            desc: '支持普通摄像机的自动标定和对任意行人、车辆的三维定位。',
            imgSrc: require('@/assets/img/technology/algorithm/video/card_6.jpg')
          }
        ]
      },
      camera: {
        desc: '利用神经网络算法，拍出更好看、更清晰的视频与照片。',
        list: [
          {
            title: '超画质拍照',
            desc: '可实现“暗区不死黑、高光不过曝、地面有细节、天空无噪声和人像有质感”等。同时，支持快速拍照和连拍等。',
            imgSrc: require('@/assets/img/technology/algorithm/camera/card_1.jpg')
          },
          {
            title: '超画质视频',
            desc: '提升噪声、动态范围，拥有更强的画质解析力； 支持多种手机常用平台。',
            imgSrc: require('@/assets/img/technology/algorithm/camera/card_2.jpg')
          },
          {
            title: '人像拍摄',
            desc: '模拟大光圈效果，超清美颜，以及更多。',
            imgSrc: require('@/assets/img/technology/algorithm/camera/card_3.jpg')
          }
        ]
      },
      sensor: {
        desc: '算法让视觉传感器具有强大的智能，软硬一体打造极致产品体验。',
        list: [
          {
            title: 'AI智能测温技术',
            desc: '自主研发轻量级、低功耗、高性能的算法模型进行高密场景人脸抓拍识别。高精度人像分割保证测温精确程度，实验室测温误差<0.1。',
            imgSrc: require('@/assets/img/technology/algorithm/sensor/card_1.jpg')
          },
          {
            title: '屏下指纹识别技术',
            desc: '结合深度学习算法，实现误识率低于1/50000下通过率大于98%，为用户带来流畅的解锁体验和安全的支付保障。',
            imgSrc: require('@/assets/img/technology/algorithm/sensor/card_2.jpg')
          },
        ]
      },
      robot: {
        desc: '利用视觉和激光等多传感器融合，智能重建环境三维信息、实现自身运动估计并在此基础上实现高效柔性的自主路径规划与避障。',
        list: [
          {
            title: '智能导航技术',
            desc: '结合高精度地图和智能避障系统，实现灵巧、安全和高效的智能导航。通过深度学习和3D技术识别环境中的人体、坑洞、悬浮物等障碍，并实现不同的智能避障策略，达到极高的安全性标准',
            imgSrc: require('@/assets/img/technology/algorithm/robot/card_1.jpg')
          },
          {
            title: '机械臂抓取技术',
            desc: '结合图像和深度信息，预测场景中的可吸取点或可抓取点。针对机械臂拣选场景做的实例分割技术。可检测出图像中各种箱子的位置，适用于机械臂的拆码垛场景。',
            imgSrc: require('@/assets/img/technology/algorithm/robot/card_2.jpg')
          },
          {
            title: '三维感知技术',
            desc: '通过深度学习技术对指定物体的3D位置和3D角度信息进行感知，准确度在公开数据集上排名第一，对光照和遮挡都很棒。',
            imgSrc: require('@/assets/img/technology/algorithm/robot/card_3.jpg')
          }
        ]
      },
    }
  },
  mounted() {
    let tabs = document.querySelectorAll('#pc-technology-algorithm-body>.body-header>.body-header-tabs a>div')
    switch (this.$route.query.name) {
      case 'face':
        tabs[0].classList.add('active')
        this.info = this.face
        break
      case 'video':
        tabs[1].classList.add('active')
        this.info = this.video
        break
      case 'camera':
        tabs[2].classList.add('active')
        this.info = this.camera
        break
      case 'sensor':
        tabs[3].classList.add('active')
        this.info = this.sensor
        break
      case 'robot':
        tabs[4].classList.add('active')
        this.info = this.robot
        break
    }
  }
}
</script>

<style scoped>
#pc-technology-algorithm-body {
  width: 100%;
  position: relative;
  background-color: #f2f3f5;
  padding: 80px 0;
}

.body-header {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 588px;
  text-align: center;
  z-index: 1;
}

.body-header-tabs {
  width: 100%;
  height: 68px;
  display: flex;
}

.body-header-tabs > a {
  display: block;
  flex: 1;
  color: #333;
  background: #fff;
  cursor: pointer;
  user-select: none;
  border-right: 1px solid #cfddec;
  line-height: 68px;
  font-weight: 600;
  font-size: 18px;
}

.body-header-tabs > a:not(.active):hover {
  color: #0e57a2;
}

.body-header-tabs > a:last-child {
  border-right: none;
}

.body-header-tabs > a > .active {
  color: #fff;
  background: #0e57a2;
}

.body-header-desc {
  width: 100%;
  height: 500px;
  background-image: linear-gradient(#0e57a2, #f2f3f5);
  color: #fff;
  font-size: 16px;
  padding: 32px 220px 0 220px;
}
.body-content {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  z-index: 2;
  text-align: center;
  padding: 40px 0 20px 0;
  display: flex;
  flex-wrap: wrap;
}
.body-content-card {
  width: 360px;
  height: 360px;
  background: #fff;
  padding: 36px 24px 24px 24px;
  transition: all .1s linear;
  text-align: left;
  position: relative;
  margin: 20px;
}
.body-content-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, .36), 0 0 12px rgba(0, 0, 0, .12)
}
.card-title {
  width: 100%;
  height: 38px;
  line-height: 40px;
  margin-bottom: 12px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  background: #ecf6fd;
  padding-left: 16px;
}
.card-desc {
  width: 100%;
  height: 130px;
  color: #666;
  font-size: 14px;
  color: #666;
  line-height: 24px;
  display: -webkit-box;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
}
.card-image {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
}
.card-image img {
  width: 100%;
  height: 100%;
}
</style>