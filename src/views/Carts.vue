<template>
  <h1 class="mt-3 mb-3">購物車</h1>
  <div class="container">
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
              <th></th>
              <th>品名</th>
              <th width="15%"></th>
              <th width="15%"></th>
              <th width="10%">單價</th>
              <th width="10%">總金額</th>
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
                  {{ item.product.title }}
                </td>
                <td>
                  <router-link :to="`/product/${item.product_id}`"
                    ><button type="button" class="btn btn-outline-primary">
                      前往商品頁面
                    </button></router-link
                  >
                </td>
                <td>
                  <button type="button" class="btn btn-outline-info" @click="cartCheck(item)">
                    查看選擇尺寸
                  </button>
                </td>
                <td>
                  {{ item.product.price.toLocaleString() }}
                </td>
                <td>
                  {{ (item.product.price * item.qty).toLocaleString() }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td colspan="3" class="text-end">總計</td>
              <td>NTD. {{ carts.total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="my-5 row justify-content-center">
        <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
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
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="order.message"
            ></textarea>
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
import CartItemCheck from '../components/CartItemCheck.vue';

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
    };
  },
  methods: {
    cartCheck(item) {
      this.$refs.cartCheck.modal.show();
      this.$refs.cartCheck.productObj = item;
    },
    deleteItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.loadingStatus.loadingItem = id;
      this.$http.delete(`${url}/${id}`).then((res) => {
        this.loadingStatus.loadingItem = '';
        this.$swal(res.data.message);
        this.getCart();
      });
    },
    deleteAll() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        this.$swal(res.data.message);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.carts.total = res.data.data.total.toLocaleString();
          console.log(this.carts);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    // updateCart(data) {
    //   const itemData = {
    //     product_id: data.product_id,
    //     qty: data.qty,
    //   };
    //   this.loadingStatus.loadingItem = data.id;
    //   this.$http
    //     .put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${data.id}`, {
    //       data: itemData,
    //     })
    //     .then((res) => {
    //       this.loadingStatus.loadingItem = '';
    //       this.getCart();
    //       this.$swal(res.data.message);
    //     })
    //     .catch((res) => {
    //       console.log(res.data);
    //     });
    // },
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
