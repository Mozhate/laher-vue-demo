<template>
  <div>
    <div>
      当前权限：<span>{{$store.getters.permissionList}}</span>
    </div>
    <div>
      <span>获取权限：</span>
      <span @click="switchPermission('admin')">admin</span>
      <span @click="switchPermission('query')">query</span>
      <span @click="switchPermission('user')">user</span>
      <p @click="clearPermission()">清理权限</p>
    </div>
    <ul>
      <li v-permission="['User']"><router-link to="/user">User权限</router-link></li>
      <li v-permission="['Trianglifyz']"><router-link to="/trianglifyz">Trianglifyz</router-link></li>
      <li v-permission="['Editorz']"><router-link to="/editorz">editor</router-link></li>
      <li v-permission="['EditorNew']"><router-link to="/editorNew">editorNew</router-link></li>
      <li v-permission="['MavonEditor']"><router-link to="/mavonEditor">mavonEditor</router-link></li>
      <li v-permission="['VmMarkdown']"><router-link to="/vmMarkdown">vmMarkdown</router-link></li>
      <li v-permission="['VueEditor']"><router-link to="/vueEditor">VueEditor</router-link></li>
      <li v-permission="['Geopattern']"><router-link to="/geopattern">Geopattern</router-link></li>
      <li><router-link to="/commPage">公共页面（不要权限）</router-link></li>
      <li><router-link to="/lazyImg">懒加载图片</router-link></li>
      <li><router-link to="/codetest">生成验证码</router-link></li>
      <li><router-link to="/particles">粒子背景</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        perMap:{
          'admin': ['Trianglifyz', 'Editorz', 'EditorNew', 'MavonEditor', 'VmMarkdown', 'VueEditor', 'Geopattern'],
          'user':['User','User_Add','User_Upd','User_Del'],
          // 'query':['User','User_Del'],
          'query':['User'],
        },
      }
    },
    methods:{
      switchPermission(perm){
        this.$store.dispatch('updatePermissionList', this.perMap[perm]);
        // 因为菜单栏直接删除dom节点，所以要刷新才能出现
        location.reload()
      },
      clearPermission(){
          localStorage.removeItem('permissionList');
          location.reload()
      }
    }
  }
</script>

<style scoped>

</style>
