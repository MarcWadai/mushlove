<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div>
    <section>
      <h1>
        <strong>How to</strong>
      </h1>
      <div class="container-left">
        <div v-for="(howto, index) in howtos" v-bind:key="`howto_${index}`">
          <router-link :to="howto.path">
            <LineInfo
              :description="howto.frontmatter.description"
              :title="howto.frontmatter.title"
              :date="howto.frontmatter.date"
            ></LineInfo>
          </router-link>
        </div>
      </div>
    </section>
    <!-- <hr />
    <section>
      <h1>
        <strong>Medicinal Species</strong>
      </h1>
      <div class="container">
        <div v-for="(specy, sindex) in species" v-bind:key="`specy_${sindex}`">
          <router-link :to="specy.path">
            <InfoCard
              :description="specy.frontmatter.description"
              :title="specy.frontmatter.title"
              :image="specy.frontmatter.image"
            ></InfoCard>
          </router-link>
        </div>
      </div>
    </section>
    <section>
      <h1>
        <strong>Common Species</strong>
      </h1>
      <div class="container">
        <div v-for="common in commonSpecies">
          <router-link :to="common.path">
            <InfoCard
              :description="common.frontmatter.description"
              :title="common.frontmatter.title"
              :image="common.frontmatter.image"
            ></InfoCard>
          </router-link>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import InfoCard from "./InfoCard";
import LineInfo from "./LineInfo";

export default {
  components: {
    LineInfo,
    InfoCard
  },
  computed: {
    species() {
      return this.$site.pages
        .filter(
          (x) =>
            x.path.startsWith("/cultivation/species") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    commonSpecies() {
      return this.$site.pages
        .filter(
          (x) =>
            x.path.startsWith("/cultivation/common_species") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    howtos() {
      return this.$site.pages
        .filter(
          (x) =>
            x.path.startsWith("/cultivation/howtodo") &&
            !x.frontmatter.cultivation_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style scoped lang="stylus">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

strong {
  background-image: linear-gradient(180deg, transparent 65%, $featureSubColor 0);
}
</style>