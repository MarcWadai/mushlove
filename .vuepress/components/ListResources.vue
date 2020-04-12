<template>
  <div>
    <div v-for="book in books">
      <div class="line">
        <div class="line__img">
          <!-- <img src="./champi.png" alt /> -->
        </div>
        <div class="title__img">{{book.frontmatter.title}}</div>
        <div class="author__img">{{book.frontmatter.author}}</div>
        <div class="description__img">{{book.frontmatter.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      console.log("books", this.$site.pages);
      return this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/resources/books") &&
            !x.frontmatter.list_resources
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style scoped lang="stylus">
.line {
  display: flex;
  margin: 10px;
  padding: 10px;
}
</style>