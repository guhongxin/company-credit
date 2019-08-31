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
            <a-button type="primary" @click="seachClick" :loading="btnloading">
              查找
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="company-infor">
      </div>
      </div>
  </div>
</template>

<script>
import Ajax from '@/assets/utils/ajax.js';
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      btnloading: false
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
          this.btnloading = true
          let obj = Object.assign({}, values,  { sample: 1 })
          this.getCompany(obj)
        }
      })
    },
    getCompany(params) {
      Ajax.request({
        url: 'http://company.yifanti.com',
        methods: 'GET',
        params: params
      }).then(res => {
        this.btnloading = false
        let data = JSON.stringify(res.data)
        var jdata = JSON.stringify(JSON.parse(data), null, 4)
        console.log('jdata',jdata)
        document.querySelector('.company-infor').innerHTML = `<pre>${jdata}</pre>`
        this.btnloading = false
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
  padding: 10px;
}
</style>
