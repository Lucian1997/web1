import Vue from 'vue'
import VueRouter from "vue-router";


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//首页
const Home = () => import('views/home/Home')
//核心技术
const Technology = () => import('views/technology/Technology')
const Technology_Algorithm = () => import('views/technology/algorithm/Algorithm')
//产品
const Product = () => import('views/product/Product')
const Product_Software = () => import('views/product/software/Software')
//解决方案
const Iot = () => import('views/iot/Iot')
const Iot_Category = () => import('views/iot/category/Category')
//行业
const Industry = () => import('views/industry/Industry')
const Industry_Domain = () => import('views/industry/domain/Domain')
//关于雅仕格
const Company = () => import('views/company/Company')
const Company_Introduce = () => import('views/company/introduce/Introduce')
const Company_Recruit = () => import('views/company/recruit/Recruit')

//安装插件
Vue.use(VueRouter)


//创建router
const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Home
  },
  {
    path: '/technology',
    component: Technology,
    children: [
      {
        path: '',
        redirect: 'algorithm',
      },
      {
        path: 'algorithm',
        component: Technology_Algorithm
      },
    ]
  },
  {
    path: '/product',
    component: Product,
    children: [
      {
        path: '',
        redirect: 'software',
      },
      {
        path: 'software',
        component: Product_Software
      },
    ]
  },
  {
    path: '/iot',
    component: Iot,
    children: [
      {
        path: '',
        redirect: 'category',
      },
      {
        path: 'category',
        component: Iot_Category
      },
    ]
  },
  {
    path: '/industry',
    component: Industry,
    children: [
      {
        path: '',
        redirect: 'domain',
      },
      {
        path: 'domain',
        component: Industry_Domain
      },
    ]
  },
  {
    path: '/company',
    component: Company,
    children: [
      {
        path: '',
        redirect: 'introduce',
      },
      {
        path: 'introduce',
        component: Company_Introduce
      },
      {
        path: 'recruit',
        component: Company_Recruit
      },
    ]
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router