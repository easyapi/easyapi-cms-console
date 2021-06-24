<template>
  <div :class="allShow ? 'search-area all-show' : 'search-area'">
    <el-row>
      <SearchItem v-for="(item, index) in searchItems" :key="index + (item.label || 'a')" :item="item"
                  v-show="item.show" :allShow="allShow" @event="event" @open="open" @search="search" @reset="reset"
                  :ref="item.key"/>
    </el-row>
  </div>
</template>
<script>
  import SearchItem from './searchItem'

  export default {
    props: {
      searchItems: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        innerWidth: null,
        allShow: false,
        btns: {
          type: 'btns'
        }
      }
    },
    components: { SearchItem },
    created() {
    },
    mounted() {
      window.onresize = this.windowResize
      let innerWidth = window.innerWidth
      this.innerWidth = innerWidth
      this.setSearchItems()
    },
    methods: {
      windowResize(e) {
        this.innerWidth = e.target.innerWidth
        this.setSearchItems()
      },
      search() {
        let obj = {}
        this.searchItems.map(item => {
          if (item.value) {
            obj[item.key] = item.value
          }
        })
        this.$emit('search', obj)
      },
      reset() {
        let searchItems = this.searchItems
        let doms = []
        searchItems.map(item => {
          if (item.key) {
            let dom = this.$refs[item.key]
            doms.push(dom)
          }
        })
        doms.map(item => {
          let dom = item[0].$children[0].$children[0]
          if (dom.handleClear) {
            dom.handleClear()
          } else if (dom.reset) {
            dom.reset()
          }
        })
        searchItems.forEach(item => {
          item.value = null
        })
        this.searchItems = searchItems
      },
      open() {
        this.allShow = !this.allShow
        this.setSearchItems()
      },
      event(item) {
        let obj = {}
        this.searchItems.map(item => {
          if (item.value) {
            obj[item.key] = item.value
          }
        })
        this.$emit('event', obj)
      },
      setSearchItems() {
        let { searchItems, innerWidth, btns } = this
        let index = searchItems.findIndex(item => {
          return item.type == 'btns'
        })
        if (index != -1) {
          searchItems.splice(index, 1)
        }
        let width = 0
        if (innerWidth >= 1600) {
          searchItems.splice(3, 0, { type: 'btns' })
          width = 6
        } else if (innerWidth >= 992) {
          searchItems.splice(2, 0, { type: 'btns' })
          width = 8
        } else {
          searchItems.splice(1, 0, { type: 'btns' })
          width = 12
        }

        searchItems.forEach((item, index) => {
          if (item.size == 'large') {
            let befores = searchItems.slice(0, index)
            let beforeWidth = befores.reduce((a, b) => {
              return a + (b.width || width)
            }, 0)
            let used = beforeWidth % 24
            if (24 - used < 12) {
              item.width = 24
            } else {
              item.width = 24 - used
            }
          }
          if (this.allShow) {
            item.show = true
          } else {
            if (width == 6) {
              item.show = index <= 3
            } else if (width == 8) {
              item.show = index <= 2
            } else {
              item.show = index <= 1
            }
          }
        })
        this.searchItems = searchItems
      }
    }
  }
</script>
<style scoped>
  .search-area {
    background-color: #fff;
    background-clip: border-box;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px 20px;
    animation: all 1s linear;
  }

  .search-col {
    margin: 10px 0;
  }

  .all-show {
    height: auto;
  }

  .form-label {
    line-height: 30px;
    text-align: right;
    padding-right: 8px;
  }
</style>
