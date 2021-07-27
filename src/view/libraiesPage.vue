<template>
  <div class="container p-4 pb-3">
    <div  v-if="libariesDetail.name">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/" tag="a">Home</router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ libariesDetail.name }}</a>
        </li>
      </ul>
    </nav>

    <div v-if="libariesDetail.authors">
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
    </div>

    <h1 class="mt-5 title is-4">
      <i class="fa fa-link" aria-hidden="true"></i> Links
    </h1>
    <div v-for="(item, i) in libariesDetail.assets" :key="'a' + i">
      <div
        v-for="(files, i) in item.files"
        :key="'b' + i"
        style="overflow:auto;border:1px solid  #33333338;padding:10px;width: 100%;"
        v-clipboard:copy="
          'https://cdnjs.cloudflare.com/ajax/libs/' +
            $route.params.name +
            '/' +
            libariesDetail.version +
            '/' +
            files
        "
        v-clipboard:success="onCopy"
      >
        <i
          class="fa fa-link"
          aria-hidden="true"
          style="padding-right:5px;color:#68daac"
        ></i>
        https://cdnjs.cloudflare.com/ajax/libs/{{ $route.params.name }}/{{
          libariesDetail.version
        }}/{{ files }}
      </div>
    </div>
    </div>
    <div v-else>Yükleniyor</div>
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
  methods: {
    onCopy() {
      this.$toast.clear();
      this.$toast.open("Coppied!");
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
