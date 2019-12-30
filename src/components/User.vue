<template>
  <div>
    <div>
      <button v-permission="['User_Add']" @click="add">新增</button>
    </div>
    <div>
      表格如下：
      <table>
        <tr>
          <td>编号</td>
          <td v-permission="['User_Upd','User_Del']">操作</td>
        </tr>
        <tr v-for="i in 10">
          <td>{{i}}</td>
          <td v-permission="['User_Upd']">修改</td>
          <td v-permission="['User_Del']">删除</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    methods:{
      add(){
        this.$router.push({path:'/userAdd'})
      }
    }
  }
</script>

<style scoped>
.hide{
  display: none;
}
</style>
