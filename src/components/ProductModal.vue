<template>
  <div
    id="productModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="productObj.imageUrl"
                  />
                </div>
                <div class="m-2 d-block text-center">或</div>
                <label class="d-block btn btn-primary text-black mb-4">
                  <input
                    style="display:none"
                    @change="upload('main', $event)"
                    type="file"
                    class="form-control"
                    id="file"
                    placeholder="新增圖片"
                  />
                  <div class="text-center">新增主要圖片</div>
                </label>
                <img class="img-fluid" :src="productObj.imageUrl" alt="" />
              </div>
              <!--多圖新增 -->
              <div class="text-secondary mb-2">多圖新增</div>
              <div v-for="(item, index) in productObj.imagesUrl" :key="index">
                <input
                  type="text"
                  class="border-0 text-secondary border-bottom border-primary-light
                  bg-light w-100 p-2 mb-2"
                  placeholder="請輸入圖片連結"
                  v-model="productObj.imagesUrl[index]"
                />

                <img class="img-fluid mb-2" :src="productObj.imagesUrl[index]" />
              </div>
              <div
                v-if="
                  !productObj.imagesUrl.length ||
                    productObj.imagesUrl[productObj.imagesUrl.length - 1]
                "
              >
                <button v-on:click="addImage" class="btn btn-outline-primary btn-sm d-block w-100">
                  新增圖片
                </button>
              </div>
              <div v-else>
                <button v-on:click="delImage" class="btn btn-outline-danger btn-sm d-block w-100">
                  刪除圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model.trim="productObj.title"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model.trim="productObj.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model.trim="productObj.unit"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="productObj.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="productObj.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model.trim="productObj.content"
                ></textarea>
              </div>
              <table class="table mt-3">
                <thead class="align-middle">
                  <tr>
                    <th colspan="2">產品介紹</th>
                    <th width="15%" scope="col">
                      <button @click="addIntroduce" type="button" class="btn btn-sm btn-secondary">
                        新增介紹
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  <tr v-for="(item, index) in productObj.introduce" :key="index">
                    <td colspan="2">
                      <input
                        type="text"
                        style="width:100%"
                        class="text-center"
                        v-model.trim="productObj.introduce[index]"
                      />
                    </td>
                    <td>
                      <button type="button" class="btn" @click="delIntroduce(index)">
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table mt-3">
                <thead class="align-middle">
                  <tr>
                    <th scope="col">尺寸</th>
                    <th scope="col">數量</th>
                    <th width="15%" scope="col">
                      <button @click="addSize" type="button" class="btn btn-sm btn-secondary">
                        新增尺寸
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  <tr v-for="(item, index) in productObj.size" :key="index">
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
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :value="productObj.is_enabled"
                    v-model="productObj.is_enabled"
                    :checked="productObj.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button @click="updateProduct" type="button" class="btn btn-primary">
            Update
          </button>
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
        imagesUrl: [],
        size: [],
        introduce: [],
      },
      buttomStatus: '',
    };
  },
  methods: {
    delIntroduce(index) {
      this.productObj.introduce.splice(index, 1);
    },
    addIntroduce() {
      if (this.productObj.introduce.length === 0) {
        this.productObj.introduce.push('');
      }
      if (
        Object.keys(this.productObj.introduce[this.productObj.introduce.length - 1]).length !== 0
      ) {
        this.productObj.introduce.push('');
      }
    },
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
    upload(key, e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.productObj.imageUrl = res.data.imageUrl;
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    addImage() {
      if (this.productObj.imagesUrl === '') {
        this.productObj.imagesUrl = [];
      }
      if (this.productObj.imagesUrl[this.productObj.imagesUrl.length - 1] !== '') {
        this.productObj.imagesUrl.push('');
      }
    },
    delImage() {
      this.productObj.imagesUrl.splice(this.productObj.imagesUrl.length - 1, 1);
    },
    updateProduct() {
      if (this.buttomStatus === '新增') {
        this.$http
          .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`, {
            data: this.productObj,
          })
          .then((res) => {
            if (res.data.success) {
              this.$swal(`${res.data.message}`);
              this.$emit('refresh');
              this.modal.hide();
            } else {
              this.$swal(`${res.data.message}`);
            }
          })
          .catch((res) => {
            this.$swal(`${res.data.message}`);
          });
      } else if (this.buttomStatus === '編輯') {
        this.$http
          .put(
            `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.productObj.id}`,
            { data: this.productObj },
          )
          .then((res) => {
            if (res.data.success) {
              this.$swal(`${res.data.message}`);
              this.$emit('refresh');
              this.modal.hide();
              console.log(this.productObj);
            } else {
              this.$swal(`${res.data.message}`);
            }
          })
          .catch((res) => {
            this.$swal(`${res.data.message}`);
          });
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
