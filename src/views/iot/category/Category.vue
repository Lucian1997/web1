<template>
  <div>
    <iot-category-tabs ref="iotCategoryTabs" @switchCategory="switchTab"/>
    <iot-category-banner ref="iotCategoryBanner" @switchCategory="switchCategory"/>
    <iot-category-body :category="category"/>
    <iot-category-contact/>
  </div>
</template>

<script>
import IotCategoryBanner from "@/views/iot/category/childComps/IotCategoryBanner";
import IotCategoryBody from "@/views/iot/category/childComps/IotCategoryBody";
import IotCategoryContact from "@/views/iot/category/childComps/IotCategoryContact";
import IotCategoryTabs from "@/views/iot/category/childComps/IotCategoryTabs";

export default {
  name: "IotCategory",
  components: {IotCategoryTabs, IotCategoryContact, IotCategoryBody, IotCategoryBanner},
  data() {
    return {
      category: this.$route.query.name
    }
  },
  methods: {
    switchTab(category) {
      this.$refs.iotCategoryBanner.href(category)
    },
    switchCategory(category) {
      this.category = category
      this.$refs.iotCategoryTabs.switchCategory(category)
    }
  }
}
</script>

<style scoped>

</style>