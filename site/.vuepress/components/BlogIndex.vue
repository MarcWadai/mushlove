<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div class="container-left">
    <div v-for="(post, index) in posts" v-bind:key="`blog_${index}`">
      <router-link :to="post.path">
        <LineInfo
          :description="post.frontmatter.description"
          :title="post.frontmatter.title"
          :date="post.frontmatter.date"
        ></LineInfo>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter((x) => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style lang="stylus" scoped>
.container-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>