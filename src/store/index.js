import Vue from 'vue';
import Vuex from 'vuex';
import test from './test'

Vue.use(Vuex);
export const index = new Vuex.Store({
  modules: {
		test,
  }
});
