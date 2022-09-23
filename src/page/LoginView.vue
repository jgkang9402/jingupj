<template>
  <div class="login">
		<button @click="test">loginBtn</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
		...mapActions(['actionLogin']),

	test(){
		this.actionLogin().then((data) => console.log(data));
	},
  },

};
</script>
