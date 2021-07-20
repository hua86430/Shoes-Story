<template>
  <div class="container">
    <nav
      style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
      aria-label="breadcrumb"
      class="mt-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-decoration-none" to="/">Home</router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          Products
        </li>
      </ol>
    </nav>
    <h1 class="mt-3 mb-5 border-bottom pb-3 text-start">Product overview</h1>
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
          <label class="btn-list border-0 btn btn-outline-secondary  py-3" for="btnradio2"
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
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <div class="card-body">
                  <img class="w-100" :src="item.imageUrl" alt="" />
                  <h3 class="mt-3">售價：{{ item.price.toLocaleString() }}</h3>
                </div>

                <div class="btn-group" role="group" aria-label="Basic example">
                  <router-link :to="`/product/${item.id}`"
                    ><button type="button" class="btn btn-outline-secondary px-5">
                      產品介紹
                    </button></router-link
                  >

                  <button type="button" class="btn btn-outline-secondary px-5">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Products -->
          <!-- Pagination -->
          <div class="d-flex justify-content-center mt-5">
            <pagination :page="pagination" @page-change="getProducts"></pagination>
          </div>
          <!-- Pagination -->
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-dark py-3 mt-3">
    <div class="container d-flex justify-content-center">
      <div class="row mb-3">
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-instagram pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Instagram</span></a
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-facebook pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Facebook</span></a
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-twitter pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Twitter</span></a
            >
          </div>
        </div>
      </div>
    </div>
    <span class="text-white">Copyright © 1999-2021 鞋頭物語 All rights reserved.</span>
  </footer>
</template>

<script>
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    Pagination,
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
  box-shadow: 3px 3px 2px rgba(44, 31, 31, 0.2);
}
</style>
