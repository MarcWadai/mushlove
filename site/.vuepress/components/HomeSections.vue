<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="home_section">
    <SectionInfo></SectionInfo>
  </div>
</template>

<script>
import SectionInfo from "./SectionInfo";
import SectionNewsletter from "./SectionNewsletter";

export default {
  computed: {}
};
</script>

<style scoped lang="stylus">
.home_section {
  position: relative;
  margin-bottom: 25px; 
  width: 100%;
  min-height: 300px;
}
</style>