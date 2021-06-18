<template>
  <div class="sideBar">
    <el-menu
      default-active="2"
      background-color="#fff"
      text-color="#bbb"
      active-text-color="#000"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped lang="scss">
.sideBar {
  width: 200px;
  height: 100%;
  background: #fff;
}
</style>
