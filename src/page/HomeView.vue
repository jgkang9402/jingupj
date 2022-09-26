<template>
  <div class="home">
    <GnbComp msg="Welcome to Your Vue.js App" />
    <div>
      <ul v-for="(item,index) in visitList" :key="index">
        <li @click="clickEvent(item.longitude, item.latitude, item.title)">
          {{item.title}}
        </li>
      </ul>
    </div>
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
			visitList : [],
		}
	},
  components: {
    GnbComp,
  },
  methods: {
    ...mapActions(['actionTest']),
    ...mapGetters(['getUserInfo', 'getVisitList']),

  clickEvent(longitude, latitude, content) {
    this.$router.push({
        path: '/about',
        query: {
          longitude: longitude,
          latitude: latitude,
          content: content,
        }
      });
  },
  },
  async created() {
    const param = {
				apiKey :  process.env.VUE_APP_VISITJEJU_KEY,
				locale : 'kr',
				category : 'c1',
				page : '2',
			}
    await this.actionTest(param)
    this.visitList = this.getVisitList()
    console.log(this.visitList)
  },




};
</script>

<style>
  ul{
    list-style:none;
  }
</style>