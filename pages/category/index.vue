<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="container-right">
      <div class="set-title">
        <div>
          <b>文章分类</b>
        </div>
        <el-button type="primary" class="ea-info-btn" @click="openCategory"
        >添加分类
        </el-button
        >
      </div>
      <div class="set-content">
        <el-table :data="tableList" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
          <el-table-column prop="name" label="分类"></el-table-column>
          <el-table-column prop="addTime" label="添加时间"></el-table-column>
          <el-table-column prop="description" label="描述">
          </el-table-column>
          <el-table-column prop="img" label="图片">
            <template #default="scope">
              <img style="width: 60px" :src="scope.row.img"/>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template #default="scope">
              <el-button @click="updateCategory(scope.row)" type="text" size="small"
              >编辑
              </el-button
              >
              <el-button type="text" size="small" @click="deleteCategory(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page-box flex-r">
          <!--<el-page :total='total' :page-size="pageSize" :current="current" @on-change="changePage"-->
          <!--show-elevator></el-page>-->
        </div>
      </div>
      <addCategory ref="child"></addCategory>
    </div>
  </div>
</template>

<script>
  import SideBar from '../../components/sideBar.vue'
  import AddCategory from './components/addCategory.vue'
  import { getCategories, deleteCategory } from '../../api/category'

  export default {
    name: '',
    components: {
      SideBar,
      AddCategory
    },
    data() {
      return {
        tableList: [],
        current: 1,
        pageSize: 15,
        total: 0,
        loadingData: '加载中'
      }
    },
    head() {
      return {
        title: '金融专辑 - EasyAPI服务市场',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '服务市场场景化服务'
          },
          { hid: 'keyword', name: 'keyword', content: '服务市场场景化服务' }
        ]
      }
    },
    methods: {
      //1.获取文章分类列表
      getArticleCategories() {
        let current = this.current - 1
        let params = {
          appKey: sessionStorage.getItem('appKey'),
          appSecret: sessionStorage.getItem('appSecret'),
          page: this.current,
          size: this.pageSize
        }
        getCategories(params, this).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.tableList = []
            this.total = 0
            this.loadingData = '暂无数据'
          } else {
            this.tableList = res.data.content
            this.total = Number(res.data.totalElements)
          }

        }).catch(error => {
          this.loadingData = '暂无数据'
          console.log(error)
        })
      },
      //添加分类
      openCategory() {
        this.$refs.child.dialogVisible = true
        this.$refs.child.title = '添加分类'
        this.$refs.child.formValidate = this.$options.data()
      },
      //编辑分类
      updateCategory(row) {
        this.$refs.child.dialogVisible = true
        this.$refs.child.title = '编辑分类'
        this.$refs.child.articleCategoryId = row.articleCategoryId
        this.$nextTick(() => {
          this.$refs.child.formValidate = row
        })
      },
      //删除文章分类
      deleteCategory(row) {
        this.$confirm('您确定要删除该分类吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {}
          deleteCategory(row.articleCategoryId, data, this).then(res => {
            if (res.data.code == 1) {
              this.getArticleCategories()
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      //分页
      changePage() {
      }
    }
    ,
    mounted() {
      this.getArticleCategories()
    }
  }
</script>

<style lang="scss">
  .el-table td {
    height: 100px;
  }
</style>
