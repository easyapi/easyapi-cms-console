<template>
  <el-col :xxl="6" :xl="item.size !== 'large' ? 8 : 16" :lg="item.size !== 'large' ? 8 : 16"
          :md="item.size !== 'large' ? 12 : 24" :sm="12" :xs="24" v-if="item.type !== 'btns'" class="search-item">
    <el-form>
      <el-form-item :label="item.label" label-width="100px">
        <el-input v-if="item.type == 'input'" v-model="item.value" :placeholder="item.placeholder || '请填写' + item.label"
                  @on-enter="search"/>
        <el-select v-if="item.type == 'select'" v-model="item.value"
                   :placeholder="item.placeholder || '请选择' + item.label"
                   clearable>
          <el-option v-for="(sitem, sindex) in selectItems" :key="sindex + sitem.value" :value="sitem.value">
            {{ sitem.label }}
          </el-option>
        </el-select>
        <el-date-picker v-if="item.type == 'datePicker'" :type="item.pickerType"
                        :placeholder="item.placeholder || '请选择' + item.label" :format="item.format"
                        @on-change="timeFormat"
                        :editable="false" format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
    </el-form>
  </el-col>
  <el-col v-else :xxl="6" :xl="8" :lg="8" :md="12" :sm="12" :xs="24" class="btns">
    <el-button @click="search" type="primary" class="ea-info-btn">查询</el-button>
    <el-button @click="reset" type="warning">重置</el-button>
    <el-button @click="open">{{ allShow ? '收起' : '展开' }}
      <i class="el-icon-arrow-down" v-if="!allShow"/>
      <i class="el-icon-arrow-up" v-else/>
    </el-button>
  </el-col>
</template>
<script>
  export default {
    data() {
      return {
        selectItems: []
      }
    },
    watch: {
      item: {
        handler(nv) {
          if (nv.selectItems) {
            this.selectItems = nv.selectItems
          }
          this.$emit('event')
        },
        deep: true
      }
    },
    props: ['item', 'allShow'],
    created() {
      if (this.item.selectItems) {
        this.selectItems = this.item.selectItems
      }
    },
    methods: {
      timeFormat(item) {
        this.item.value = item
        this.$emit('event')
      },
      open() {
        this.$emit('open')
      },
      reset() {
        this.$emit('reset')
      },
      search() {
        this.$emit('search')
      }
    }
  }
</script>
<style scoped>
  .ivu-input {
    height: 30px;
    flex: 1;
  }

  .ivu-select {
    height: 30px;
    flex: 1;
  }

  .ivu-select-selection {
    height: 30px;
  }

  .ivu-btn {
    height: 30px;
  }

  .ivu-date-picker {
    flex: 1;
  }

  .item-label {
    /*line-height: 30px;*/
    /*padding-right: 20px;*/
    /*text-align: right;*/
    /*min-width: 116px;*/
  }

  .search-item .btns {
    display: flex;
    margin: 10px 0;
  }

  .btns button {
    margin-left: 10px;
  }
</style>
