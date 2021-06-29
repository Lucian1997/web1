<template>
  <div id="app">
    <header-nav-bar/>
    <router-view/>
    <page-footer/>
    <record-number/>
  </div>
</template>

<script>
import HeaderNavBar from "@/components/HeaderNavBar";
import PageFooter from "@/components/PageFooter";
import RecordNumber from "@/components/RecordNumber";

export default {
  name: 'App',
  components: {
    RecordNumber,
    PageFooter,
    HeaderNavBar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
