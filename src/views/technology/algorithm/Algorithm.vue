<template>
  <div>
    <algorithm-banner/>
    <algorithm-body/>
    <algorithm-contact/>
  </div>
</template>

<script>
import AlgorithmBanner from "@/views/technology/algorithm/childComps/AlgorithmBanner";
import AlgorithmContact from "@/views/technology/algorithm/childComps/AlgorithmContact";
import AlgorithmBody from "@/views/technology/algorithm/childComps/AlgorithmBody";
export default {
name: "Algorithm",
  components: {AlgorithmBody, AlgorithmContact, AlgorithmBanner}
}
</script>

<style scoped>

</style>