<template>
  <div>
    <banner/>
    <brain/>
    <iot/>
    <case/>
    <news/>
    <contact-us/>
  </div>
</template>

<script>
import Banner from "./childComps/Banner";
import Brain from "./childComps/Brain";
import Iot from "./childComps/Iot";
import Case from "@/views/home/childComps/Case";
import News from "@/views/home/childComps/News";
import ContactUs from "@/views/home/childComps/ContactUs";

export default {
  name: "Home",
  components: {
    ContactUs,
    News,
    Case,
    Iot,
    Banner,
    Brain
  }
}
</script>

<style scoped>

</style>