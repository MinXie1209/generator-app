<template>
<div id="main">
   <br>
    <i-form :model="formItem" :label-width="80">
       
        <Form-item label="数据库url">
            <i-input v-model="formItem.url" placeholder="请输入"></i-input>
        </Form-item>
       <Form-item label="数据库名">
            <i-input v-model="formItem.dataBase" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="包名">
            <i-input v-model="formItem.packageName" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="用户名">
            <i-input v-model="formItem.userName" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="密码">
            <i-input v-model="formItem.password" placeholder="请输入" type="password"></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" v-on:click="generator" class="bt">生成代码</i-button>
           
        </Form-item>
    </i-form>
    </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      formItem: {
        url:
          "jdbc:mysql://127.0.0.1:3306/association?useUnicode=true&characterEncoding=utf-8&userSSL=false&serverTimezone=GMT%2B8",
        dataBase: "association",
        userName: "root",
        password: "123456",
        packageName: "top.myjnxj.association"
      }
    };
  },
  methods: {
    generator: function() {
      console.log(this.formItem);
      const data = {
        url: this.formItem.url,
        dataBase: this.formItem.dataBase,
        userName: this.formItem.userName,
        password: this.formItem.password,
        packageName: this.formItem.packageName
      };
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: data,
        url: "http://localhost:80/api/generator",
        responseType:'blob'
      };
      axios(options)
        .then((res) => { // 处理返回的文件流
        console.log(typeof(res));
            const content = res
            const blob = new Blob([content.data]);
            console.log(blob)
            const fileName = this.formItem.dataBase+".rar"
            if ('download' in document.createElement('a')) { // 非IE下载
              const elink = document.createElement('a')
              elink.download = fileName
              elink.style.display = 'block'
              elink.href = URL.createObjectURL(blob)
              document.body.appendChild(elink)
              elink.click()
              //URL.revokeObjectURL(elink.href) // 释放URL 对象
              document.body.removeChild(elink)
            } else { // IE10+下载
              navigator.msSaveBlob(blob, fileName)
            }
        })
        .catch(function(error) {
          console.log("error");
        });
    }
  }
};
</script>
<style>
#main {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  width: 500px;
  margin: 0 auto;
}
.bt{
  margin: 0 auto
}
</style>

