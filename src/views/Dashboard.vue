<template>
  <nav id="navbarTop" class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3">
    <div class="container">
      <router-link to="/dashboard" class="navbar-brand">DashBoard</router-link>
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
        <ul class="navbar-nav mb-lg-0">
          <li class="nav-item my-auto">
            <router-link to="/dashboard" class="nav-link" aria-current="page"
              >Product List</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link to="/dashboard/orderManage" class="nav-link" aria-current="page"
              >Order Manage</router-link
            >
          </li>
        </ul>
        <div class="ms-auto">
          <button type="button" @click="logout" class="btn btn-outline-danger">Log Out</button>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$http.post(`${process.env.VUE_APP_API}logout`).then((res) => {
        if (res.data.success) {
          this.$swal({
            icon: 'success',
            text: `${res.data.message}`,
          });
          this.$router.push('/');
        }
      });
    },
    loginCheck() {
      this.$http.post(`${process.env.VUE_APP_API}api/user/check`).then((res) => {
        if (!res.data.success) {
          this.$swal({
            icon: 'warning',
            text: `${res.data.message}`,
          });
          console.log(res.data);
          this.$router.push('/login');
        }
      });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.loginCheck();
  },
};
</script>
