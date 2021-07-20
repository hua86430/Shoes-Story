<template>
  <nav id="navbarTop" class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-2">
    <div class="container">
      <router-link to="/" class="navbar-brand">Shoes Story</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item my-auto">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item my-auto">
            <router-link to="/products" class="nav-link" aria-current="page">Products</router-link>
          </li>
          <li class="nav-item my-auto">
            <button @click="login" type="button" class="btn nav-link" aria-current="page">
              DashBoard
            </button>
          </li>
          <li class="nav-item ms-3">
            <router-link to="carts" class="nav-link" aria-current="page"
              ><i class="bi bi-cart3" style="font-size:2em"></i>
              <span>➠</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      loginCheck: false,
    };
  },
  methods: {
    login() {
      this.$http.post(`${process.env.VUE_APP_API}api/user/check`).then((res) => {
        if (res.data.success) {
          this.$router.push('/dashboard');
          console.log('yes', res.data.success);
        } else {
          this.$router.push('/login');
          console.log(res.data.success);
        }
      });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
  },
};
</script>

<style scoped>
#navbarTop {
  transition: 0.25s background-color;
}
</style>
