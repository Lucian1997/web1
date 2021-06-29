<template>
  <div>
    <domain-banner :domain="domain"/>
    <domain-insight :domain="domain"/>
    <domain-consumerelectronics v-if="domain === 'consumerelectronics'"/>
    <domain-iot v-if="domain === 'iot'"/>
    <domain-smart-city v-if="domain === 'smartcity'"/>
    <domain-smart-logistics v-if="domain === 'smartlogistics'"/>
    <domain-contact/>
  </div>
</template>

<script>
import DomainContact from "@/views/industry/domain/childComps/DomainContact";
import DomainInsight from "@/views/industry/domain/childComps/DomainInsight";
import DomainBanner from "@/views/industry/domain/childComps/DomainBanner";
import DomainConsumerelectronics from "@/views/industry/domain/childComps/DomainConsumerelectronics";
import DomainIot from "@/views/industry/domain/childComps/DomainIot";
import DomainSmartCity from "@/views/industry/domain/childComps/DomainSmartCity";
import DomainSmartLogistics from "@/views/industry/domain/childComps/DomainSmartLogistics";

export default {
name: "Domain",
  components: {
    DomainSmartLogistics,
    DomainSmartCity, DomainIot, DomainConsumerelectronics, DomainBanner, DomainInsight, DomainContact},
  data() {
    return {
      domain: '',
    }
  },
  mounted() {
    this.domain = this.$route.query.name
  }
}
</script>

<style scoped>

</style>