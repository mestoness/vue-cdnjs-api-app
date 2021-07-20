<template>
  <div class="container mt-5 pb-3 p-4" v-if="libariesDetail.name">
    <h1 class="title is-4">Authors</h1>
    <div v-for="(item, i) in libariesDetail.authors" :key="i" class="mb-3">
      <div><b>Name</b> : {{ item.name }}</div>
      <div>
        <b>URL</b> :
        <a :href="item.url == null ? '' : item.url">{{
          item.url == null ? "NULL" : item.url
        }}</a>
      </div>
    </div>

    <h1 class="mt-5 title is-4">
      <i class="fa fa-link" aria-hidden="true"></i> Links
    </h1>
    <div v-for="(item, i) in libariesDetail.assets" :key="'a' + i">
      <div
        v-for="(files, i) in item.files"
        :key="'b' + i"
        style="overflow:auto;border:1px solid  #33333338;padding:10px;width: 100%;"
      >
        https://cdnjs.cloudflare.com/ajax/libs/{{ $route.params.name }}/{{
          libariesDetail.version
        }}/{{ files }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    // URL deki parametreyi kullanarak libariesPages adlı actionu dispatch ettik
    this.$store.dispatch("libariesPages", this.$route.params.name);
  },
  computed: {
    libariesDetail() {
      // getLibariesDetail adlı gettersi kullanarak storedeki libariesPages adlı state'i return ettik
      return this.$store.getters.getLibariesDetail;
    },
  },
};
</script>
