<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="">
      <el-row class="set-title">
        <el-col :span="2">
          <h2><b>文章管理</b></h2>
        </el-col>
        <el-col :span="2">
          <Button type="info" class="ea-info-btn" @click="operArticle(1)">添加文章</Button>
        </el-col>
      </el-row>
      <div class="set-content">
        <el-table :data="tableData" :no-data-text="loadingData">
          <el-table-column
            prop="title"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="articleCategory.name"
            label="分类">
          </el-table-column>
          <el-table-column
            prop="count"
            label="查看次数">
          </el-table-column>
          <el-table-column
            prop="addTime"
            label="发布时间">
          </el-table-column>
          <template #default="scope">
            <el-button @click="openArticle(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
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

  export default {
    name: '',
    components: {
      SideBar
    },
    data() {
      return {
        tableData: [],
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
      openArticle() {

      },
      //分页
      changePage(){

      }
    }
  }
</script>

<style lang="scss" scoped></style>
