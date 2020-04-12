<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div>
    <section>
      <div class="title-left">
        <h3><strong>Discover cultivation techniques</strong></h3>
      </div>
      <div class="stack-card">
        <div v-for="(howto, index) in howtos" :class="`one-card-${index}`">
          <router-link :to="howto.path">
            <InfoCard :description="howto.frontmatter.description" :title="howto.frontmatter.title"></InfoCard>
          </router-link>
        </div>
      </div>
    </section>
    <hr/>
    <section>
      <div class="title-right">
        <h3><strong>Discover species growth parameters</strong></h3>
      </div>
      <div class="stack-card">
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
      console.log("this.$site", this.$site);
      const pages = this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/cultivation/species") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
      //get only the three first document
      return pages.length < 3 ? pages : pages.slice(0, 2);
    },
    howtos() {
      const pages = this.$site.pages
        .filter(
          x =>
            x.path.startsWith("/cultivation/howtodo") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
      return pages.length < 3 ? pages : pages.slice(0, 2);
    }
  }
};
</script>

<style scoped lang="stylus">
section {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  .title-left {
    flex: 1;
    text-align: left;
    width: 100%;

    strong {
      background-image: linear-gradient(180deg, transparent 65%, #FF9F1C 0);
    }
  }

  .title-right {
    flex: 1;
    text-align: right;
    width: 100%;

    strong {
      background-image: linear-gradient(180deg, transparent 65%, #FF9F1C 0);
    }
  }

  .stack-card {
    flex-direction: row;
    flex: 3;
    display: flex;
    position: relative;
  }
}
</style>