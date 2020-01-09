import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth'

const service = axios.create({
  // 5 秒超时
  // timeout: 5 * 1000,
});
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X_AUTH_TOKEN'] = getToken()
    }
    return config
  },
  error => {
    console.error(error);
    return Promise.reject(error)
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.success) {
      Message({message: res.msg, type: 'error', duration: 3 * 1000});
      // 995:非法的token; 994:token已过期;
      if (res.code === 995 || res.code === 994) {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error);
    Message({message: error.message, type: 'error', duration: 3 * 1000});
    return Promise.reject(error)
  }
);

function createdPost(url, data) {
  return service({method: 'post', url: url, data: data})
}

export const post = {
  uc(url, data) {
    return createdPost(process.env.UC_API_URL + url, data)
  }
}
