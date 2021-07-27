<template>
  <div class="modal fade my-auto" tabindex="-1" id="instockStatus" ref="instock">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ productObj.product.title }} 尺寸 / 數量</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr class="align-middle">
                <th width="30%" scope="col">尺寸</th>
                <th width="30%" scope="col">數量</th>
                <th width="15%" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in productObj.size" :key="index" class="align-middle">
                <td>
                  <span class="text-center">{{ productObj.size[index].num }}</span>
                </td>
                <td>
                  <input
                    type="number"
                    class="text-center"
                    min="1"
                    v-model.trim="productObj.size[index].qty"
                  />
                </td>
                <td>
                  <button type="button" class="btn" @click="delSize(index)">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button @click="instockUpdate" type="button" class="btn btn-primary">UpDate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
      productObj: {
        product: {},
        size: [],
        id: '',
        qty: 1,
      },
      qtyTemp: 0,
    };
  },
  methods: {
    delSize(index) {
      this.productObj.size.splice(index, 1);
    },
    instockUpdate() {
      this.productObj.size.forEach((item) => {
        this.productObj.qty += item.qty;
      });
      console.log(this.productObj.qty);
      // this.$http
      //   .put(
      //     `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.productObj.id}`,
      //     {
      //       data: this.productObj,
      //     },
      //   )
      //   .then((res) => {
      //     if (res.data.success) {
      //       this.$swal(`${res.data.message}`);
      //       this.$emit('cartCheckModal');
      //       this.modal.hide();
      //     }
      //   })
      //   .catch((res) => {
      //     console.log(res.data);
      //   });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.instock);
  },
};
</script>
