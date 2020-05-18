<template>
  <div class="about">
    <h1>创建分类</h1>
    <el-form label-width="70px" @submit.native.prevent="save">
      <el-form-item label="名称" label-width="70px">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item >
         <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
      <h2>{{model.name}}</h2>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      model:{}
    }
  },
  methods: {
    async save() {
      // console.log("save")
      // console.log(this.model.name)
      let param = await this.$http.post('/categories',{
        name:this.model.name
      })
      if(param.data.flag ==1){
        this.$router.push('/categories/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      }else{
       this.$message.error('错了哦，这是一条错误消息');
      }
      // if(param.data.flag == 1){

      // }
    }
  },
}
</script>


