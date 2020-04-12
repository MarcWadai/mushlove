<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div>
    <section>
      <h1>
        <strong>How to</strong>
      </h1>
      <div class="container">
        <div v-for="howto in howtos">
          <router-link :to="howto.path">
            <InfoCard :description="howto.frontmatter.description" :title="howto.frontmatter.title"></InfoCard>
          </router-link>
        </div>
      </div>
    </section>
<hr/>
    <section>
      <h1><strong>Species</strong></h1>
      <div class="container">
        <div v-for="specy in species">
          <router-link :to="specy.path">
            <InfoCard :description="specy.frontmatter.description" :title="specy.frontmatter.title"></InfoCard>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import InfoCard from "./InfoCard";

export default {
  computed: {
    species() {
      return this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/cultivation/species") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    howtos() {
      return this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/cultivation/howtodo") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style scoped lang="stylus">
.container {
  display: flex;
  flex-direction: horizontal;
}

strong {
  background-image: linear-gradient(180deg, transparent 65%, $featureSubColor 0);
}
</style>