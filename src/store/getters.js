const getters = {
  permissionList: state => {
    // 防止刷新后vuex丢失权限
    if(state.permission.permissionList.length === 0){
      // 查询缓存中存在的权限
      const perms = localStorage.getItem("permissionList");
      if(perms){
        state.permission.permissionList = perms;
        return perms;
      }
    }
    return state.permission.permissionList
  },
};
export default getters
