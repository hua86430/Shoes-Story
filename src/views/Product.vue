<template>
  <div class="container">
    <loading v-model:active="isLoading" />

    <div class="row">
      <!-- Left -->

      <div class="col-lg-9">
        <nav
          style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
          aria-label="breadcrumb"
          class="mt-3"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link class="text-decoration-none" to="/">Home</router-link>
            </li>

            <li class="breadcrumb-item">
              <router-link class="text-decoration-none" to="/products">Products</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <h1 class="mt-3 mb-5 border-bottom pb-3 text-start">Product Introduction</h1>
        <p>{{ product.content }}</p>
        <div v-for="item in product.imagesUrl" :key="item.id">
          <img class="w-100 mb-5" :src="item" alt="" />
        </div>
      </div>
      <!-- Left -->
      <!-- Right -->
      <div class="col-lg-3 position-relative">
        <div class="card mt-5">
          <div class="card-body">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />

            <h6 class="text-muted fw-lighter">商品編號：{{ product.id }}</h6>
            <h2>{{ product.title }}</h2>
            <h4 class="card-text">售價：{{ product.price }}</h4>
            <div class="row">
              <div class="col">
                <div class="d-flex mb-3">
                  <span class="my-auto">尺寸：</span>
                  <div>
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btnradio1">23.5</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="d-flex mb-3">
                    <span class="my-auto">庫存：</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="input-group mb-3">
                <span class="my-auto">數量：</span>
                <button class="btn btn-outline-secondary" type="button">
                  -
                </button>
                <input type="number" class="form-control text-center" min="1" :value="qty" />

                <button class="btn btn-outline-secondary" type="button">
                  +
                </button>
              </div>
              <button type="button" class="btn btn-primary w-100">
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <button
          v-if="upbutton"
          @click="backTop"
          type="button"
          class="btn btn-secondary position-absolute mb-3"
          style="bottom:0;right:0;"
        >
          <i class="bi bi-arrow-bar-up"></i>
        </button>
      </div>

      <!-- Right -->
    </div>
  </div>
  <footer class="bg-dark py-3">
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
export default {
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      isLoading: false,
      qty: 1,
      upbutton: true,
    };
  },
  methods: {
    backTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.isLoading = true;
    this.$http
      .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`)
      .then((res) => {
        this.isLoading = false;
        this.product = res.data.product;
        this.product.price = res.data.product.price.toLocaleString();
        console.log(this.product);
      });
    if (document.body.offsetWidth < 960) {
      this.upbutton = false;
    }
  },
};
</script>
