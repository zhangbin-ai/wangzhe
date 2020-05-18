<template>
  <div class="about">
    <h1>分类列表</h1>
    <el-table :data="newslist">
      <el-table-column prop="id" label="new_id" width="220"></el-table-column>
      <el-table-column prop="name" label="分类名称" ></el-table-column>
      <!-- <el-table-column prop="address" label="地址"></el-table-column> -->
      <!-- {date:"2016-05-02",name:'lisi',address:'bacoibsovcq'} -->
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist:[]
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('categories')
      this.newslist = res.data
      console.log(res)
    }
  },
  created(){
    // let list =  await this.$http.get('/categories')
    // console.log(list)
    // this.newslist = list
    this.fetch()
  }
};
</script>