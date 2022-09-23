import testApi from '../api/testApi'

export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
		async actionTest(){
			console.log(123)
			testApi.testFunc(123)
		}
  }
};
