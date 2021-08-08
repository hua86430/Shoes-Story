<template>
  <h1 class="mt-3 mb-3">購物車</h1>
  <loading v-model:active="isLoading" />
  <div class="container" style="margin-top:10%;" v-if="isEmpty">
    <p class="fs-1 text-danger">Oops!</p>
    購物車是空的 立即選購！<br />

    <router-link to="/products" class="nav-link" aria-current="page">
      <button type="button" class="btn btn-lg btn-outline-secondary px-5 mt-3">開始選購</button>
    </router-link>
  </div>

  <div class="container" v-else>
    <div class="row">
      <div class="col">
        <div class="text-end">
          <button class="btn btn-outline-danger" type="button" @click="deleteAll">
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th width="5%"></th>
              <th width="20%">品名</th>
              <th></th>
              <th width="10%">單價 / 數量</th>
              <th width="25%">總金額</th>
            </tr>
          </thead>
          <tbody class="align-middle">
            <template v-if="carts">
              <tr v-for="item in carts.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="deleteItem(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
                <td>
                  <router-link :to="`/product/${item.product_id}`"
                    ><a href="#"
                      ><img :src="item.product.imageUrl" class="w-100" alt="" />
                      {{ item.product.title }}</a
                    ></router-link
                  >
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-info"
                    @click="cartCheck(item)"
                  >
                    查看選擇尺寸
                  </button>
                </td>
                <td class="text-baseline">
                  {{ item.product.price.toLocaleString() }} / {{ item.qty }}
                </td>
                <td>
                  {{ (item.product.price * item.qty).toLocaleString() }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end fs-2">總計</td>
              <td colspan="2" class="text-center">NTD. {{ carts.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="my-5 row justify-content-center">
        <Form ref="form" class="col-md-6 mx-auto" v-slot="{ errors }" @submit="onSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="信箱"
              type="email"
              rules="email|required"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 Email"
              v-model="order.user.email"
            ></Field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="order.user.name"
            ></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="number"
              :rules="isPhone"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              v-model="order.user.tel"
            ></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="order.user.address"
            ></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="10" required></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div>

  <CartItemCheck @cartCheckModal="getCart" ref="cartCheck"></CartItemCheck>
</template>

<script>
import CartItemCheck from '@/components/CartItemCheck.vue';

export default {
  components: {
    CartItemCheck,
  },
  data() {
    return {
      cartTemp: {},
      carts: [],
      loadingStatus: {
        loadingItem: '',
      },
      order: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
      isEmpty: false,
    };
  },
  methods: {
    cartCheck(item) {
      this.$refs.cartCheck.modal.show();
      this.$refs.cartCheck.productObj = item;
      console.log(this.$refs.cartCheck.productObj);
    },
    deleteItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.loadingStatus.loadingItem = id;
      this.$http.delete(`${url}/${id}`).then((res) => {
        this.loadingStatus.loadingItem = '';
        this.getCart();
        this.$swal({
          showConfirmButton: false,
          text: res.data.message,
          icon: 'success',
        });
        this.isLoading = false;
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
    },
    deleteAll() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        this.getCart();
        this.$swal({
          showConfirmButton: false,
          text: res.data.message,
          icon: 'success',
        });
        this.isLoading = false;
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      });
    },
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.carts.total = res.data.data.total.toLocaleString();
          this.isLoading = false;
          if (this.carts.carts.length <= 0) {
            this.isEmpty = true;
          } else {
            this.isEmpty = false;
          }
          console.log(this.carts);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    onSubmit() {
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`, {
          data: this.order,
        })
        .then((res) => {
          if (res.data.success) {
            this.$refs.form.resetForm();
            this.getCart();
            this.$swal(res.data.message);
          } else {
            this.$swal(res.data.message);
          }
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  created() {
    this.getCart();
  },
};
</script>
