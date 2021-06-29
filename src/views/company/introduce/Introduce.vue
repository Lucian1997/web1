<template>
  <div>
    <introduce-banner/>
    <introduce-technology/>
    <introduce-implementation/>
  </div>
</template>

<script>
import IntroduceBanner from "@/views/company/introduce/childComps/IntroduceBanner";
import IntroduceTechnology from "@/views/company/introduce/childComps/IntroduceTechnology";
import IntroduceImplementation from "@/views/company/introduce/childComps/IntroduceImplementation";

export default {
  name: "Introduce",
  components: {IntroduceImplementation, IntroduceTechnology, IntroduceBanner},
  mounted() {
    let technology = document.querySelector('.introduce-technology-image')
    let technologyHeight = document.querySelector('#pc-company-introduce-technology').offsetTop - window.screen.availHeight
    let implementation = document.querySelector('#pc-company-introduce-implementation>div')
    let implementationHeight = document.querySelector('#pc-company-introduce-implementation').offsetTop - window.screen.availHeight
    window.onscroll = function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > Math.abs(technologyHeight)) {
        technology.classList.add('introduce-up')
        setTimeout(() => {
          technology.style.opacity = '1'
        },1200)
      }
      if (scrollTop > Math.abs(implementationHeight)) {
        implementation.classList.add('introduce-up')
        setTimeout(() => {
          implementation.style.opacity = '1'
        },1200)
      }
    }
  }
}
</script>

<style>
.introduce-up {
  animation: introduce-up 1.3s;
}

@keyframes introduce-up {
  0% {
    bottom: -120px;
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    bottom: 0;
    opacity: 1;
    transform: translateY(0);
  }
}
</style>