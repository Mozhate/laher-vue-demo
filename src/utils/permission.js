import store from '@/store'

export default function includePermission(permissions = []) {
  const permissionList = store.getters.permissionList;
  return !!permissions.find(permission => permissionList.includes(permission))
}
