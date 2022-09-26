import testApi from '../api/testApi'
import loginApi from '../api/loginApi'

export default {
  state: {
    loginKey : ''
  },
  getters: {
    getUserInfo: (state) => state.loginKey
  },
  mutations: {
    setUserInfo(state, payload){
      state.loginKey = payload
    }
  },
  actions: {
		actionTest(){
			console.log(123)
			testApi.testFunc(123)
		},
    async actionLogin(){
      const userInfo = await loginApi.login();
      return userInfo.user.uid
    },
    async actionLogout(){
      const userInfo = await loginApi.logout();
      return userInfo
    }
  }
};
