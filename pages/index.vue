<template>
  <div class="container">
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from '../components/sideBar.vue'
export default {
  name: '',
  components: {
    SideBar,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: '金融专辑 - EasyAPI服务市场',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '服务市场场景化服务',
        },
        { hid: 'keyword', name: 'keyword', content: '服务市场场景化服务' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
