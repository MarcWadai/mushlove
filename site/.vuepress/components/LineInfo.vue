<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="line">
    <span> {{ dateCut }} </span>
    <div class="body">
      <div> {{ title }} </div>
      <p> {{ description }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "date"],
  computed: {
    dateCut() {
      return this.date.split("T")[0] || this.date
    }
  }
};
</script>

<style scoped lang="stylus">
.line {
  min-width: 300px;
  max-width: 600px;
  min-height: 80px;
  margin: 10px;
  display: flex;

  .body {
    color: $textColor !important;

    div {
      font-weight: bold;
    }

    p {
      font-style: italic
    }
  }

  span {
    padding-right: 30px
  }
}

.line:hover {
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}

</style>