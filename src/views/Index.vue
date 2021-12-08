<template>
  <nav
    id="navbarTop"
    class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-2"
    ref="navbar"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">Shoes Story</router-link>
      <button
        class="navbar-toggler"
        ref="navbarToggle"
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
            <router-link to="/" class="nav-link" aria-current="page" @click="navbarToggle"
              >首頁</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link to="/products" class="nav-link" aria-current="page" @click="navbarToggle"
              >產品總覽</router-link
            >
          </li>
          <li class="nav-item my-auto">
            <router-link to="/about" class="nav-link" aria-current="page" @click="navbarToggle"
              >關於我們</router-link
            >
          </li>
          <li class="nav-item my-auto mx-auto">
            <button @click="login" type="button" class="btn nav-link" aria-current="page">
              後台系統
            </button>
          </li>
          <li class="nav-item ms-3">
            <router-link
              to="/carts"
              class="nav-link position-relative"
              aria-current="page"
              @click="navbarToggle"
              ><i class="bi bi-cart3" style="font-size:2em"></i>
              <p
                v-if="is_response"
                class="position-absolute"
                style="top:0px;right:45%;min-width:15px; background-color:gray;
                color:white; border-radius:50%;padding:1.5px"
              >
                {{ carts }}
              </p>
              <p
                v-else-if="isEmpty"
                class="position-absolute"
               
              >
              
              </p> <p
                v-else
                class="position-absolute"
                style="top:0px;right:6px;min-width:15px; background-color:gray;
                color:white; border-radius:50%;padding:1.5px"
              >
                {{ carts }}
              </p>
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
      carts: [],
      isEmpty :false,
      screenWidth: '',
      is_response: false,
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
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.carts = res.data.data.carts.length;
         if(this.carts ===0){
            this.isEmpty = true
         }
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    navbarToggle() {
      if (this.is_response === true) {
        this.$refs.navbarToggle.click();
      }
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.getCart();
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 991) {
      this.is_response = false;
    } else {
      this.is_response = true;
    }
  },
  mounted() {
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 991) {
        this.is_response = false;
      } else {
        this.is_response = true;
      }
    };
  },
};
</script>

<style scoped>
#navbarTop {
  transition: 0.25s background-color;
}
</style>
