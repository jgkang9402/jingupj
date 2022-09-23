import testApi from '../api/testApi'
import loginApi from '../api/loginApi'

export default {
  state: {
    loginKey : ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
		actionTest(){
			console.log(123)
			testApi.testFunc(123)
		},
    actionLogin(){
      loginApi.login();
    }
  }
};
