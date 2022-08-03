<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="card">
    <div class="title-container">
      <img v-if="image" :src="$withBase(`/${image}`)" alt="champi" />
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="body">
      <!-- :style="{'background-image': `url('/${image}')`}"> -->
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "image"],
  computed: {}
};
</script>

<style scoped lang="stylus">
.card {
  min-width: 40px;
  max-width: 300px;
  min-height: 220px;
  padding: 14px;
  margin: 10px;
  // border: 1px inset $codeBgColor
  border-radius: 8px 8px;
  box-shadow: 0px 0px 5px $codeBgColor;

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body {
    color: $textColor !important;
  }

  img {
    border-radius: 50%;
    width: 80px;
    heigth: 80px;
  }

  .body:after {
    content: '';
    background: url('/champ.png');
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}

.card:hover {
  box-shadow: 0px 0px 10px $codeBgColor;
  border: 1px outset $codeBgColor;
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}
</style>