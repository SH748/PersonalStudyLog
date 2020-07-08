<template>
  <div class="brand">
    <el-button type="primary" @click="dialogFormVisible=true">+&nbsp;添加</el-button>
    <el-table class="brandList" border :data="tableData" v-loading="loading">
      <el-table-column label="序号" width="100" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="品牌名称" width="180" align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">{{ scope.row.tmName }}</div>
        </template>
      </el-table-column>
      <el-table-column label="品牌LOGO" width="540" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <!-- 鼠标悬浮时显示内容的区域 -->
            <p>ID: {{ scope.row.id }}</p>
            <p>品牌: {{ scope.row.tmName }}</p>
            <div slot="reference" class="name-wrapper">
              <el-image :src="scope.row.logoUrl" style="width:90px">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="warning" size="mini" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit"></i>&nbsp;编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-delete"></i>&nbsp;删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="getBrands"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout=" prev, pager, next, jumper,->, sizes,total"
      :total="total"
      background
      style="text-align:center"
    ></el-pagination>

    <!-- 添加Brand弹窗  -->
    <el-dialog title="编辑" class="dialog" :visible.sync="dialogFormVisible">
      <el-form :model="form" class="form">
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.tmName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-change="change"
            :auto-upload="uploaderConfig.autoUpload"
            :limit="uploaderConfig.limit"
            accept="image/jpg, image/png, image/jpeg"
          >
            <img v-if="form.logoUrl" :src="form.logoUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBrand">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TrademarkList',
  data() {
    return {
      tableData: [], //列表数据
      total: 0, //分页-总页数
      loading: true, //是否爱加载中
      currentPage: 1, //分页-当前页数
      pageSizes: [3, 6, 9, 12], //分页-每页展示数据
      pageSize: 3, //分页-当前每页展示数据
      dialogFormVisible: false, //对话弹窗是否显示
      form: {
        //对话弹窗中的数据
        id: '',
        tmName: '',
        logoUrl: ''
      },
      formLabelWidth: '120px',
      uploaderConfig: {
        autoUpload: true, //文件是否立即上传
        limit: 1,
        drag: true,
        url: '/dev-api/admin/product/fileUpload'
      },
      currentImg: null,
    }
  },
  mounted() {
    this.getBrands(this.currentPage)
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    getBrands(page = 1) {
      this.loading = true
      this.$API.tradeark.getList(page, this.pageSize).then(values => {
        this.tableData = values.data.records
        this.total = values.data.total
        this.loading = false
      })
    },
    handleEdit(index, item) {
      const { id, tmName, logoUrl } = item
      this.form = { id, tmName, logoUrl }
      this.dialogFormVisible = true
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getBrands(1)
    },
    change(file) {
      // if (this.form.id) {
        this.currentImg = file.raw
        let reader = new FileReader()
        reader.readAsDataURL(file.raw) // 这里也可以直接写参数event.raw
        // 转换成功后的操作，reader.result即为转换后的DataURL ，
        reader.onload = () => {
          this.form.logoUrl = reader.result
        }
      // }
    },
    async uploader() {
      let result = await this.$API.uploader.uploadImg(this.currentImg)
      console.log(result);
    },
    async addBrand() {
      if(this.currentImg){
        let result = await this.$API.uploader.uploadImg(this.currentImg)
        console.log(result);
      }
    }
  },
  watch: {
    dialogFormVisible(val) {
      if (!val) {
        ;(this.form.id = ''), (this.form.tmName = '')
        this.form.logoUrl = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.brand {
  button {
    text-align: center;
  }
  .brandList {
    margin-top: 15px;
    width: 100%;
  }
  .pagination {
    margin-top: 15px;
  }
  .dialog {
    .form {
      .avatar-uploader {
        .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          &:hover {
            border-color: #409eff;
          }
        }
        .avatar {
          width: 100%;
          display: block;
        }

        .avatar-uploader {
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }
      }
    }
  }
}
</style>