<template>
  <div class="modal fade my-auto" tabindex="-1" id="instockStatus" ref="instock">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ productObj.title }} 庫存狀態</h5>
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
                <th scope="col">尺寸</th>
                <th scope="col">數量</th>
                <th width="15%" scope="col">
                  <button @click="addSize" type="button" class="btn btn-sm btn-secondary">
                    新增尺寸
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in productObj.size" :key="index" class="align-middle">
                <td>
                  <input
                    type="number"
                    class="text-center"
                    v-model.trim="productObj.size[index].sizeNum"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="text-center"
                    min="1"
                    v-model.trim="productObj.size[index].sizeQty"
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
        <div class="modal-footer">
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
      productObj: {},
    };
  },
  methods: {
    delSize(index) {
      this.productObj.size.splice(index, 1);
    },
    addSize() {
      if (this.productObj.size.length === 0) {
        this.productObj.size.push({});
      }
      if (Object.keys(this.productObj.size[this.productObj.size.length - 1]).length !== 0) {
        this.productObj.size.push({});
      }
    },
    instockUpdate() {
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.productObj.id}`,
          {
            data: this.productObj,
          },
        )
        .then((res) => {
          if (res.data.success) {
            this.$swal(`${res.data.message}`);
            this.$emit('instockModal');
            this.modal.hide();
          }
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.instock);
  },
};
</script>
