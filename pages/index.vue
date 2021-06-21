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
        <div class="page-box flex-r">
          <!--<el-page :total='total' :page-size="pageSize" :current="current" @on-change="changePage"-->
          <!--show-elevator></el-page>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/sideBar.vue'
  import { getArticles } from '../api/article'

  export default {
    name: '',
    components: {
      SideBar
    },
    data() {
      return {
        articalList: [],
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
      //1.获取文章管理列表
      getArticles() {
        console.log(111)
        let current = this.current - 1
        let params = {
          appKey: sessionStorage.getItem('appKey'),
          appSecret: sessionStorage.getItem('appSecret'),
          page: current,
          size: this.pageSize,
          type:"文章"
        }
        getArticles(params, this).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.articalList = []
            this.total = 0
            this.loadingData = '暂无数据'
          } else {
            this.articalList = res.data.content
            this.total = Number(res.data.totalElements)
          }

        }).catch(error => {
          this.loadingData = '暂无数据'
          console.log(error)
        })
      },
      openArticle() {
      },
      //分页
      changePage() {
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
</style>
