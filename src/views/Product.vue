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
              <router-link class="text-decoration-none" to="/">首頁</router-link>
            </li>

            <li class="breadcrumb-item">
              <router-link class="text-decoration-none" to="/products">產品總覽</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <h1 class="mt-3 mb-5 border-bottom pb-3 text-start">產品介紹</h1>
        <div tabindex="0" style="overflow-y: scroll; height:80vh">
          <p>{{ product.content }}</p>
          <div v-for="item in product.imagesUrl" :key="item.id">
            <img class="w-100 mb-5" :src="item" :alt="product.title" />
          </div>
        </div>
      </div>
      <!-- Left -->
      <!-- Right -->
      <div class="col-lg-3">
        <div class="card mt-5 border-0 border-start">
          <div class="card-body">
            <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />

            <h6 class="text-muted fw-lighter mt-1">商品編號：{{ product.id }}</h6>
            <h2>{{ product.title }}</h2>
            <h4 class="card-text">售價：{{ product.price }}</h4>
            <div class="row">
              <div class="col">
                <div class="d-flex mb-3">
                  <div class=" text-start my-auto">
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
        <div class="border-start">
          <h3 class="my-3">產品特色</h3>
          <ul style="list-style:circle" class="text-start">
            <li class="mb-2" v-for="item in product.introduce" :key="item.id">{{ item }}</li>
          </ul>
        </div>

        <div class="container border-start" style="width:100%">
          <h2 class="mt-5 mb-3">購物須知</h2>
          <div class="accordion accordion-flush mb-5" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  出貨時間
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  因每日大量訂單，我們會盡快於接收到訂單的三至七天內出貨，同時確保品質讓您安心。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed text-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  付款後多久可以收到？
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  我們配合了多家物流，讓您不管身在何處都能在
                  <strong>一至三天</strong>
                  內收到，<br />如貨運遲到經我們確認後補償給您折價券，供下一次購買時可以使用，以表達我們最高的敬意。
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  退換貨須知
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  本產品不適用7天鑑賞期，若商品有瑕疵請聯絡客服，我們將提供專人到府服務。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right -->
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer },
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
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.$refs.navbar.carts = res.data.data.carts.length;
          console.log(this.carts);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    getProduct() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
          this.product.price = res.data.product.price.toLocaleString();
          this.getThisId();
          console.log(this.product);
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
        this.isLoading = true;
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
            this.$swal({
              showConfirmButton: false,
              text: res.data.message,
              icon: 'success',
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500);
            this.isLoading = false;
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
