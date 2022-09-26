<template>
  <div class="login">
		<button v-if="!this.userInfo" @click="login">google LoginBtn</button>
		<button v-else @click="logout">logoutBtn</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
	data() {
		return {
			userInfo : ''
		}
	},
  components: {
  },
  methods: {
		...mapActions(['actionLogin', 'actionLogout']),
		...mapMutations(['setUserInfo']),
		...mapGetters(['getUserInfo']),

	async login(){
		await this.actionLogin().then((data) => this.setUserInfo(data));
		this.userInfo = this.getUserInfo()
	},

	async logout(){
		await this.actionLogout().then((data) => this.setUserInfo(data));
		this.userInfo = this.getUserInfo()
	},


},
	

};
</script>
