<template>
  <div class="sideBar">
    <div class="sideBar-item" v-for="(nav, index) in sideBarList" :key="index">
      <nuxt-link
        :to="nav.path"
        :class="activePath == nav.path ? 'nav active' : 'nav'"
      >
        <i class="el-icon-s-help"></i>
        <span>{{ nav.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    data() {
      return {
        activePath: '',
        sideBarList: [
          {
            title: '文章管理',
            path: '/'
          },
          {
            title: '视频管理',
            path: '/video'
          },
          {
            title: '文章分类',
            path: '/category'
          }
        ]
      }
    },
    mounted() {
      this.activePath = this.$route.path ? `${this.$route.path}` : '/'
    }
  }
</script>

<style scoped lang="scss">
  .sideBar {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    overflow: auto;
    padding-top: 20px;
    width: 200px;
    background: #fff;
  }

  .sideBar-item :hover {
    color: #18c1d6;
    background: #f4f4f4;
  }

  .active {
    color: #18c1d6;
    background: #f4f4f4;
  }

  .nav {
    padding: 0 20px;
    width: 200px;
    height: 56px;
    display: block;
    display: flex;
    align-items: center;

    i {
      font-size: 18px;
      margin-right: 10px;
    }

    span {
      font-size: 14px;
    }
  }
</style>
