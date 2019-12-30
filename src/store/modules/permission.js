const state = {
  permissionList: []
};
const mutations = {
  UPDATE_PERMISSION_LIST: (state, payload) => {
    state.permissionList = payload
  }
};
const actions = {
  /**
   * 修改权限信息，存入localStorage中
   */
  updatePermissionList({state, commit}, permissionList) {
    return new Promise(resolve => {
      // 存入本地缓存
      localStorage.setItem("permissionList", JSON.stringify(permissionList))
      // 存入vuex
      commit('UPDATE_PERMISSION_LIST', JSON.stringify(permissionList))
    }).catch((e) => {
    });
  }
  /*updatePermissionList({state, commit}, permissionList) {
    commit('UPDATE_PERMISSION_LIST', permissionList)
  },*/
};
export default {
  state,
  mutations,
  actions
}
