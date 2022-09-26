<template>
  <div class="home">
    <GnbComp msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GnbComp from '@/components/GnbComp.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  data() {
		return {
			visitList : []
		}
	},
  components: {
    GnbComp,
  },
  methods: {
    ...mapActions(['actionTest']),
    ...mapGetters(['getUserInfo', 'getVisitList'])
  },
  async created() {
    const param = {
				apiKey :  process.env.VUE_APP_VISITJEJU_KEY,
				locale : 'kr',
				category : 'c1',
				page : '1',
			}
    await this.actionTest(param)
    this.visitList = this.getVisitList()
    console.log(this.visitList)
  },
};
</script>
