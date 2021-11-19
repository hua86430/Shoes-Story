<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mt-3 mb-3 font-weight-normal">
        登入
      </h1>
      <div class="col-8">
        <Form ref="form" id="form" class="form-signin" v-slot="{ errors }">
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
              v-model="user.username"
            ></Field>
            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Password</label>
            <Field
              id="password"
              name="密碼"
              type="password"
              rules="required"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              v-model="user.password"
              placeholder="請輸入 密碼"
            ></Field>
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            id="loginBtn"
            type="button"
            @click="login"
          >
            登入
          </button>
        </Form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 1999-2021 鞋頭物語 All rights reserved.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const url = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `huaToken=${token}; expires=${new Date(expired)}`;
            this.$swal({
              icon: 'success',
              text: `${res.data.message}`,
            });
            setTimeout(() => {
              this.$router.push('/dashboard');
            }, 100);
          } else {
            this.$swal({
              icon: 'error',
              text: `${res.data.message}`,
            });
          }
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
  },
};
</script>
