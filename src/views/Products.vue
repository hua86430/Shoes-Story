<template>
  <div class="container">
    <nav
      style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb"
      class="mt-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-decoration-none" to="/">首頁</router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          產品總覽
        </li>
      </ol>
    </nav>
    <h1 class="mt-3 mb-5 border-bottom pb-3 text-start">產品總覽</h1>
  </div>
  <div class="container">
    <div class="row">
      <!-- List -->
      <div class="col-md-3">
        <div
          class="btn-group-vertical w-100"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            @click="categoryFilter('all')"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label class="btn-list border-0 btn btn-outline-secondary py-3" for="btnradio1"
            >全部</label
          >

          <input
            @click="categoryFilter('慢跑鞋')"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label class="btn-list border-0 btn btn-outline-secondary py-3" for="btnradio2"
            >慢跑鞋</label
          >

          <input
            @click="categoryFilter('休閒鞋')"
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          />
          <label class="btn-list border-0 btn btn-outline-secondary  py-3" for="btnradio3"
            >休閒鞋</label
          >
        </div>
      </div>
      <!-- Products -->
      <div class="col-md-9">
        <loading v-model:active="isLoading" />
        <div class="row">
          <div class="col-md-4 mb-3" v-for="item in products" :key="item.id">
            <div class="card">
              <router-link :to="`/product/${item.id}`" class="text-decoration-none">
                <div class="card-body">
                  <h5 class="card-title text-dark">{{ item.title }}</h5>
                  <div class="card-body p-0">
                    <img class="w-100" :src="item.imageUrl" alt="{{item.id}}" />
                    <h3 class="mt-4 text-secondary">售價：{{ item.price.toLocaleString() }}</h3>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- Products -->
          <!-- Pagination -->
          <div class="d-flex justify-content-center mt-5">
            <Pagination :page="pagination" @page-change="getProducts"></Pagination>
          </div>
          <!-- Pagination -->
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Pagination,
    Footer,
  },
  data() {
    return {
      products: [],
      pagination: '',
      isLoading: false,
    };
  },
  methods: {
    getProducts(page) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;

            this.pagination = res.data.pagination;
            this.products = res.data.products;
          }
        });
    },
    categoryFilter(c) {
      this.products = [];
      this.isLoading = true;

      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            if (c !== 'all') {
              this.products = res.data.products.filter((item) => item.category === c);
            } else {
              this.products = res.data.products;
            }
          }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.btn-list {
  border-radius: 0;
}
.card {
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.8s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.8s box-shadow,
    0.8s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
