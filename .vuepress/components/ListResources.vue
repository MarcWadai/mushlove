<template>
  <div>
    <div v-for="book in books">
      <div class="line">
        <div class="line_img">
          <img :src="$withBase('/champ.png')" alt="champi" />
        </div>
        <div class="line_text">
          <div class="line_title">
            <span>
              <strong>{{book.frontmatter.title}}</strong>
              - {{book.frontmatter.author}}
            </span>
          </div>
          <div class="line_description">{{book.frontmatter.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
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

  .line_img {
    min-width: 80px;
    max-width: 80px;
  }

  .line_text {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left: 10px;

    .line_title {
      margin-bottom: 10px;
    }
  }
}

strong {
  background-image: linear-gradient(180deg, transparent 80%, $featureSubColor 0);
}
</style>