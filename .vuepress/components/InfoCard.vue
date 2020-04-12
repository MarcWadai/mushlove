<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <div class="body">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
  computed: {}
};
</script>

<style scoped lang="stylus">
.card {
  min-width: 40px;
  max-width: 300px;
  min-height: 80px;
  padding: 14px;
  margin: 10px;
  // border: 1px inset $codeBgColor
  border-radius: 8px 8px;
  box-shadow: 0px 0px 5px $codeBgColor;

  .body {
      color: $textColor !important;
  }
}

.card:hover {
  box-shadow: 0px 0px 10px $codeBgColor;
  border: 1px outset $codeBgColor;
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}
</style>