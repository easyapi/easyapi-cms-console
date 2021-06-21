<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="container-right">
      <div class="set-title">
        <div>
          <b>文章管理</b>
        </div>
        <el-button type="primary" class="ea-info-btn" @click="operArticle(1)"
        >添加文章
        </el-button
        >
      </div>
      <div class="set-content">
        <el-table :data="articalList" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="articleCategory.name" label="分类">
          </el-table-column>
          <el-table-column prop="count" label="查看次数"></el-table-column>
          <el-table-column prop="addTime" label="发布时间"></el-table-column>
          <el-table-column>
            <template #default="scope">
              <el-button @click="openArticle(scope.row)" type="text" size="small"
              >编辑
              </el-button
              >
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagtination @fatherSize="fatherSize" @fatherCurrent="fatherCurrent" :size="pagination.size"
                   :total-elements="pagination.total" class="paging"></Pagtination>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/sideBar.vue'
  import Pagtination from '../components/el-pagination/index'
  import { getArticles } from '../api/article'

  export default {
    name: '',
    components: {
      SideBar,
      Pagtination
    },
    data() {
      return {
        articalList: [],
        pagination: {
          page: 1,
          size: 12,
          total: 0
        },
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
      //1.获取文章管理列表
      getArticles() {
        console.log(111)
        let page = this.pagination.page - 1
        let params = {
          appKey: sessionStorage.getItem('appKey'),
          appSecret: sessionStorage.getItem('appSecret'),
          page: page,
          size: this.pagination.size,
          type: '文章'
        }
        getArticles(params, this).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.articalList = []
            this.pagination.total = 0
            this.loadingData = '暂无数据'
          } else {
            this.articalList = res.data.content
            this.pagination.total = Number(res.data.totalElements)
          }

        }).catch(error => {
          this.loadingData = '暂无数据'
          console.log(error)
        })
      },
      //分页
      fatherSize(data) {
        this.pagination.size = data
        this.getArticles()
      },
      fatherCurrent(data) {
        this.pagination.page = data
        this.getArticles()
      }
    },
    mounted() {
      this.getArticles()
    }
  }
</script>

<style lang="scss">
  .el-table td {
    height: 100px;
  }

  .paging {
    margin-top: 30px;
    float: right;
  }
</style>
