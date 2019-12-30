import includePermission from '@/utils/permission'

const permissionHandle = (el, binding) => {
  const permissions = binding.value;
  if (!includePermission(permissions)) {
    // 移除dom节点
    el.remove(el.selectedIndex)

    // 隐藏dom节点
    // el.style.display = 'none';

    // 类隐藏dom节点
    // el.classList.add('hide')
  }
};

export default {
  inserted: permissionHandle,
  update: permissionHandle
}
