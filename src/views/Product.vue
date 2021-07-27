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
        <div tabindex="0" style="overflow-y: scroll; height:80vh">
          <p>{{ product.content }}</p>
          <div v-for="item in product.imagesUrl" :key="item.id">
            <img class="w-100 mb-5" :src="item" alt="" />
          </div>
        </div>
      </div>
      <!-- Left -->
      <!-- Right -->
      <div class="col-lg-3">
        <div class="card mt-5">
          <div class="card-body">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />

            <h6 class="text-muted fw-lighter mt-1">商品編號：{{ product.id }}</h6>
            <h2>{{ product.title }}</h2>
            <h4 class="card-text">售價：{{ product.price }}</h4>
            <div class="row">
              <div class="col">
                <div class="d-flex mb-3">
                  <div class="col-2 text-start my-auto">
                    <span class="my-auto">尺寸：</span>
                  </div>
                  <div class="col-10 text-start">
                    <div
                      class="btn-group  my-auto"
                      role="group"
                      style="flex-wrap: wrap;"
                      aria-label="Basic radio toggle button group"
                    >
                      <div v-for="(item, index) in product.size" :key="index" class="mx-1 mb-2">
                        <input
                          type="radio"
                          class="btn-check"
                          name="btnradio"
                          :id="index"
                          autocomplete="off"
                          @click="checkInstock(item), sizeTemp(item.sizeNum)"
                          :disabled="item.sizeQty <= 0"
                        />
                        <label class="btn btn-outline-secondary" :for="index">{{
                          item.sizeNum
                        }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="d-flex mb-3">
                  <span class="my-auto">庫存：</span>
                  <span class="text-muted">{{ instockQty.sizeQty }}</span>
                </div>
              </div>
            </div>

            <div>
              <div class="input-group mb-3">
                <span class="my-auto">數量：</span>
                <button
                  :disabled="qty <= 1"
                  @click="addQtyBtn('down')"
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  -
                </button>
                <input
                  type="number"
                  class="form-control text-center"
                  v-model.number="qty"
                  min="1"
                />

                <button @click="addQtyBtn('up')" class="btn btn-outline-secondary" type="button">
                  +
                </button>
              </div>
              <button
                @click="addCart(product.id, sizeTempNum, qty)"
                type="button"
                class="btn btn-secondary w-100"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
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
      instockQty: {},
      qty: 1,
      sizeTempNum: '',
      sizeObj: '',
      itemData: {
        product_id: '',
        size: [],
        qty: 1,
      },
      cartTemp: '',
    };
  },
  methods: {
    getProduct() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
          this.product.price = res.data.product.price.toLocaleString();
          this.getThisId();
        });
    },
    getThisId() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartTemp = res.data.data.carts.filter((item) => item.product_id === this.product.id);
          if (this.cartTemp.length > 0) {
            this.itemData.size = this.cartTemp[0].size;
          }
        });
    },
    addQtyBtn(status) {
      if (status === 'up') {
        this.qty += 1;
      } else {
        this.qty -= 1;
      }
    },
    checkInstock(item) {
      this.instockQty = item;
    },
    sizeTemp(item) {
      this.sizeTempNum = item;
    },
    /* eslint-disable no-param-reassign */
    addCart(id, num, qty) {
      if (num !== '') {
        this.itemData.qty = 0;
        this.itemData.qty += qty;
        this.itemData.product_id = id;
        if (this.itemData.size.length > 0) {
          this.sizeObj = this.itemData.size.filter((item) => item.num === num);
          if (this.sizeObj.length > 0) {
            this.sizeObj[0].qty += qty;
          } else {
            this.itemData.size.push({ num, qty });
          }
        } else {
          this.itemData.size.push({ num, qty });
        }

        this.$http
          .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, {
            data: this.itemData,
          })
          .then((res) => {
            this.$swal(res.data.message);
          });
      } else {
        this.$swal({
          icon: 'warning',
          text: '請選擇尺寸',
        });
      }
    },
    /* eslint-enable no-param-reassign */
  },
  created() {
    this.isLoading = true;
    this.getProduct();
  },
};
</script>
