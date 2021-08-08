<template>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="top:0; bottom:0; left:0; right:0;
      background-image: url(https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);
      background-position:right; opacity: 0.1; pointer-events: none"
    ></div>
    <div class="container" style="min-height:89vh">
      <div class="row pt-5 justify-content-center">
        <div class="col-md-12">
          <h1 class="py-5">About</h1>
          <p>
            1993年，那時候的還是懵懂無知的學生，天天看著路人們穿著的鞋子，用羨慕的眼光想像著某一天自己也能擁有獨一無二的限量鞋款。<br />
            長大後有能力了，卻始終無法找到心目中的鞋子，卻因為共同的興趣結交了一群和我一樣的愛好者，也就是我目前的夥伴們。<br />
            相識幾年後我們決定創立一個讓大家都可以快速且安心，卻可以用更實惠的價格購買到自己喜歡的鞋款<br />
            於是就有了現在的我們，Shoes Story 。
          </p>
        </div>
        <div class="col-md-5 py-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.5372322483615!2d120.32281910809884!3d22.613694322288183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04a0fc5dc531%3A0x2002f77ba0ed26af!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A56u55YyX6YeM!5e0!3m2!1szh-TW!2stw!4v1627652741134!5m2!1szh-TW!2stw"
            style="border:0;"
            width="100%"
            height="400px"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="col-md-5 py-5">
          <Form ref="form" class="col-md-6 mx-auto" v-slot="{ errors }" @submit="onSubmit">
            <div class="mb-3">
              <label for="name" class="form-label fs-4">姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
              ></Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label fs-4">電話</label>
              <Field
                id="tel"
                name="電話"
                type="number"
                :rules="isPhone"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
              ></Field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label fs-4">留言</label>
              <textarea
                id="message"
                rules="required"
                class="form-control"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-secondary">送出訂單</button>
            </div>
          </Form>
          <!-- <h3 class="text-center mb-3">
            Contact us
          </h3>
          <label for="Username" class="form-label fs-5">姓名</label>
          <div class="input-group mb-3 justify-content-center">
            <input
              id="Username"
              type="text"
              class="form-control text-center"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style="max-width:50%"
            />
          </div>
          <label for="Usermail" class="form-label fs-5">聯絡信箱</label>
          <div class="input-group mb-3 justify-content-center">
            <input
              id="Usermail"
              type="text"
              class="form-control text-center"
              aria-label="Usermail"
              aria-describedby="basic-addon2"
              style="max-width:50%"
            />
          </div>
          <label for="Userproblem" class="form-label fs-5">問題</label>
          <div class="input-group mb-3 justify-content-center">
            <input
              id="Userproblem"
              type="text"
              class="form-control text-center"
              aria-label="Userproblem"
              aria-describedby="basic-addon3"
              style="max-width:50%; height:100px"
            />
          </div>
          <button type="button" class="btn btn-secondary w-50">送出</button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    onSubmit() {
      this.$swal('成功送出，我們會盡快回覆！');
      this.$refs.form.resetForm();
    },
  },
};
</script>
