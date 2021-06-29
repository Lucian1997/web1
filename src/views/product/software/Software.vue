<template>
  <div>
    <software-banner :software="software"/>
    <software-body :software="software"/>
    <software-characteristic :software="software"/>
    <software-scene :software="software"/>
    <software-contact/>
  </div>
</template>

<script>
import SoftwareContact from "@/views/product/software/childComps/SoftwareContact";
import SoftwareScene from "@/views/product/software/childComps/SoftwareScene";
import SoftwareCharacteristic from "@/views/product/software/childComps/SoftwareCharacteristic";
import SoftwareBanner from "@/views/product/software/childComps/SoftwareBanner";
import SoftwareBody from "@/views/product/software/childComps/SoftwareBody";

export default {
  name: "Software",
  components: {SoftwareBody, SoftwareBanner, SoftwareCharacteristic, SoftwareScene, SoftwareContact},
  data() {
    return {
      software: '',
    }
  },
  mounted() {
    this.software = this.$route.query.name
  }
}
</script>

<style scoped>

</style>