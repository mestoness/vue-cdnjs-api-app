<template>
  <div>
    <input
      type="text"
      v-model="query"
      placeholder="Search any tech..."
      v-on:keyup.13="SearchSubmit"
      class="input is-primary"
    />
    <div class="result">
      <aside class="menu">
        <ul class="menu-list mt-2">
            <transition-group name="slide-fade" tag="ul">

            <li
            :v-if="searchResults > 0"
              v-for="(item, index) in searchResults"
              :key="index"
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
