<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="home_section">
    <!-- <div class="clouds">
      <img src="./champ.png" alt class="cloud cloud1" />
      <img src="./champ.png" alt class="cloud cloud2" />
      <img src="./champ.png" alt class="cloud cloud3" />
      <img src="./champ.png" alt class="cloud cloud4" />
      <img src="./champ.png" alt class="cloud cloud5" />
    </div> -->
    <SectionInfo></SectionInfo>
    <SectionNewsletter></SectionNewsletter>
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
.home_section 
  position: relative;
  width: 100%;
  min-height: 300px;

  .clouds
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;

    .cloud
      bottom: 0;
      position: absolute;
      margin-left: -300px;


    .cloud1
      animation: animateCloud 85s linear infinite;
      transform: scale(.8);
      bottom: 75%;
      animation-delay: 2s;


    .cloud2
      animation: animateCloud 56s linear infinite;
      transform: scale(.5);
      bottom: 60%;


    .cloud3
      animation: animateCloud 90s linear infinite;
      transform: scale(.6);
      bottom: 50%;
      animation-delay: 16s;


    .cloud4
      animation: animateCloud 75s linear infinite;
      transform: scale(1);
      bottom: 25%;


    .cloud5
      animation: animateCloud 110s linear infinite;
      transform: scale(.4);
      bottom: 0;

</style>