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
  components: {
    GnbComp,
  },
  methods: {
    ...mapActions(['actionTest']),
    ...mapGetters(['getUserInfo'])
  },
  created() {
    this.actionTest()
    console.log(this.getUserInfo())
  },
};
</script>
