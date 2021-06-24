<template>
  <div v-if="showHeader" class="header">
    我是头部
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data(){
      return{
        showHeader:""
      }
    },
    mounted() {
      this.showHeader = this.comsys.showHeader
    }
  }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    background: red;
    height: 50px;
  }
</style>
