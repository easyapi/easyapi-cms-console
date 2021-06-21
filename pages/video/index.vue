<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="container-right">
      <div class="set-title">
        <div>
          <b>视频管理</b>
        </div>
        <el-button type="primary" class="ea-info-btn" @click="openVideo"
        >添加视频
        </el-button
        >
      </div>
      <div class="set-content">
        <div>
          <div class="video-card">
            <div class="video-card-item"
                 v-for="item in videoList"
                 :key="item.id">
              <el-card>
                <div class="video-card-imgBox">
                  <img class="video-card-img" :src="item.img">
                </div>
              </el-card>
              <h3
                class="video-title">
                {{item.title}}</h3>
              <span class="video-type">
                类型：{{item.articleCategory.name}}</span>
              <div>
                <el-button class="video-delete" type="danger" size="mini"
                           @click="deleteVideo(item.articleId)">删除
                </el-button>
                <el-button class="video-edit" type="primary" size="mini"
                           @click="operArticle(0, item.articleId)">编辑
                </el-button>
              </div>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <Addvideo ref="videoChild"></Addvideo>
        <Pagtination @fatherSize="fatherSize" @fatherCurrent="fatherCurrent" :size="pagination.size"
                     :total-elements="pagination.total" class="paging"></Pagtination>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from '../../components/sideBar.vue'
  import Pagtination from '../../components/el-pagination/index'
  import Addvideo from './components/addVideo'
  import { getArticles, deleteArticle } from '../../api/article'

  export default {
    name: '',
    components: {
      SideBar,
      Pagtination,
      Addvideo
    },
    data() {
      return {
        videoList: [],
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
    mounted() {
      this.getArticles()
    },
    methods: {
      //1.获取视频管理列表
      getArticles() {
        let page = this.pagination.page - 1
        let params = {
          appKey: sessionStorage.getItem('appKey'),
          appSecret: sessionStorage.getItem('appSecret'),
          page: page,
          size: this.pagination.size,
          type: '视频'
        }
        getArticles(params, this).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.videoList = []
            this.pagination.total = 0
            this.loadingData = '暂无数据'
          } else {
            this.videoList = res.data.content
            this.pagination.total = Number(res.data.totalElements)
          }

        }).catch(error => {
          console.log(error)
        })
      },
      //删除视频
      deleteVideo(id) {
        this.$confirm('您确定要删除该视频吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteArticle(id, this).then(res => {
            console.log(res)
            if (res.data.code == 1) {
              this.getArticles()
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
      //添加视频
      openVideo() {
        this.$refs.videoChild.dialogVisible = true
        this.$refs.videoChild.title = '添加视频'
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
    }
  }
</script>

<style lang="scss" scoped>
  .video-card {
    background: #F8F8F9;
    padding-top: 20px;
    min-height: 42px;
  }

  .video-card-item {
    float: left;
    margin-bottom: 30px;
    margin-left: 3%;
    width: 21.25%;
  }

  .video-card-imgBox {
    text-align: center
  }

  .video-card-img {
    width: 100%;
    height: 200px;
    object-fit: scale-down;
    border-radius: 6px;
  }

  .video-title {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px 10px 0;
  }

  .video-type {
    color: #999;
    margin-top: 5px;
    float: left;
    padding: 5px 10px 0;
  }

  .paging {
    margin-top: 30px;
    float: right;
  }

  .video-delete {
    float: right;
    margin-top: 8px;
    margin-right: 5px;
  }

  .video-edit {
    float: right;
    margin-top: 8px;
    margin-right: 5px;
  }
</style>
