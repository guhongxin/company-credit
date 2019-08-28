<template>
  <div class="container">
    <div class="container-content">
      <div class="seach-area">
        <a-form :form="form" layout="inline">
          <a-form-item label="公司名称" 
            :label-col="{ span: 6 }" :wrapper-col="{ span: 18}"
            style="width: 40%;"
            >
            <a-input
              v-decorator="[
              'enterprise',
              {rules: [{ required: true, message: '请输入公司名称' }]}
              ]"
            />
          </a-form-item>
          <a-form-item style="width: 10%;" label="类型" :label-col="{ span: 12}" :wrapper-col="{ span: 12 }">
            <a-input
              v-decorator="[
              'type',
              { initialValue: 3,
                rules: [{ required: true, message: '公司类型' }]
              }]"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" @click="seachClick">
              查找
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="company-infor"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  head () {
    return {
      title: '企业信息查询',
      meta: [
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: '企业、信息、信用' }
      ]
    }
  },
  methods: {
    seachClick() {
       this.form.validateFields((err, values) => {
        if (!err) {
          this.getCompany(values)
        }
      })
    },
    getCompany(params) {
      axios.get('http://company.yifanti.com/', {
        params: params
      }).then(res => {
        console.log('kkkk', res.data)
      })
    }
  }
}
</script>

<style>
.container {
  overflow: hidden;
}
.container-content {
  width: 80%;
  margin: 0px auto 0px;
}
.company-infor {
  min-height: 300px;
  margin: 20px auto 0px;
  border: 1px solid #dddddd;
  border-radius: 4px;
}
</style>
