<template>
  <h1 class="mt-3 mb-3">產品總覽</h1>
  <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" @click="openModal('add', item)" class="btn btn-lg btn-primary">
        新增產品
      </button>
    </div>
    <table class="table table-hover align-middle mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="150"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            {{ item.is_enabled ? '啟用' : '未啟用' }}
          </td>
          <td>
            <div class="btn-group">
              <button
                @click="openModal('instock', item)"
                type="button"
                class="btn btn-outline-info btn-sm"
              >
                查看庫存</button
              ><button
                @click="openModal('edit', item)"
                type="button"
                class="btn btn-outline-primary btn-sm"
              >
                編輯
              </button>
              <button
                @click="openModal('delete', item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <Pagination :page="pagination" @page-change="getProducts"></Pagination>
  </div>
  <ProductModal @refresh="getProducts" ref="modal"></ProductModal>
  <DeleteModal @deldata="getProducts" ref="deleteModal"></DeleteModal>
  <InstockModal @instockModal="getProducts" ref="instockModal"></InstockModal>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import InstockModal from '@/components/Instock.vue';

export default {
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
    InstockModal,
  },
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProducts(page) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`,
        )
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
    openModal(status, item) {
      if (status === 'edit') {
        this.$refs.modal.modal.show();
        this.$refs.modal.productObj = {
          imagesUrl: [],
          size: [],
          introduce: [],
          ...item,
        };
        this.$refs.modal.buttomStatus = '編輯';
      } else if (status === 'add') {
        this.$refs.modal.modal.show();
        this.$refs.modal.productObj = {
          imagesUrl: [],
          size: [],
          introduce: [''],
        };
        this.$refs.modal.productObj.size.push({});
        this.$refs.modal.buttomStatus = '新增';
      } else if (status === 'instock') {
        this.$refs.instockModal.modal.show();
        this.$refs.modal.productObj.size.push({});
        this.$refs.instockModal.productObj = { ...item };
      } else if (status === 'delete') {
        this.$refs.deleteModal.modal.show();
        this.$refs.deleteModal.productObj = { imagesUrl: [], ...item };
      }
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {},
};
</script>
