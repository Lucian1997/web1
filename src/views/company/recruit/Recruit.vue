<template>
  <div>
    <recruit-banner/>
    <recruit-process/>
    <recruit-atmosphere/>
  </div>
</template>

<script>
import RecruitBanner from "@/views/company/recruit/childComps/RecruitBanner";
import RecruitProcess from "@/views/company/recruit/childComps/RecruitProcess";
import RecruitAtmosphere from "@/views/company/recruit/childComps/RecruitAtmosphere";
export default {
name: "Recruit",
  components: {RecruitAtmosphere, RecruitProcess, RecruitBanner}
}
</script>

<style scoped>

</style>