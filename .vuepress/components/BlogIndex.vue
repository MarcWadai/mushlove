<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div>
    <div v-for="post in posts" class="blog-card">
      <h2>
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      </h2>

      <p>{{ post.frontmatter.description }}</p>

      <p>
        <router-link :to="post.path">Read more</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style lang="stylus" scoped>
.blog-card {
  // border: 1px inset $codeBgColor
  border-radius: 8px 8px;
  box-shadow: 0px 0px 5px $codeBgColor;
  padding: 18px;
  margin: 15px
}

.blog-card:hover {
  box-shadow: 0px 0px 10px $codeBgColor;
  border: 1px outset $codeBgColor;
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}
</style>