import testApi from '../api/testApi'
import loginApi from '../api/loginApi'

export default {
  state: {
    loginKey : '',
    visitList : [],
  },
  getters: {
    getUserInfo: (state) => state.loginKey,
    getVisitList: (state) => state.visitList
  },
  mutations: {
    setUserInfo(state, payload){
      state.loginKey = payload;
    },
    setVisitList(state, payload){
      state.visitList = payload;
    }
  },
  actions: {
		async actionTest(context, params){
      const { commit } = context;
      const result = await testApi.testFunc(params);
      commit('setVisitList', result.items);
      return result
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
