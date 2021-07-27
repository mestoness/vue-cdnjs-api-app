<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/" tag="a">Home</router-link>
        </li>
      </ul>
    </nav>

    <input
      type="text"
      v-model="query"
      placeholder="Search any tech..."
      v-on:keyup.13="SearchSubmit"
      class="input is-primary"
    />
    <div class="result">
      <div v-if="searchResults.total == 0" style="padding:10px 0">
        Sonuç Bulunamadı
      </div>
      <aside class="menu">
        <ul class="mt-2 menu-list">
          <transition-group name="slide-fade">
            <li
              :v-if="searchResults > 0"
              v-for="(item, index) in searchResults.results"
              :key="'c' + index"
            >
              <router-link
                tag="a"
                :to="{ name: 'library', params: { name: item.name } }"
                >{{ item.name }}</router-link
              >
            </li>
          </transition-group>
        </ul>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    SearchSubmit() {
      this.$store.dispatch("searchCDN", this.query);
    },
  },
  computed: {
    searchResults() {
      return this.$store.getters.getSearchResults;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #eeeeee;
  padding: 10px 15px;
}

ul li a {
  font-size: 1.05rem;
  font-weight: 500;
  color: #5bc299;
}

ul li a:hover {
  color: #68daac;
}
</style>
