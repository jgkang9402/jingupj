<template>
  <div class="home">
    <GnbComp msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GnbComp from '@/components/GnbComp.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    GnbComp,
  },
  methods: {
    ...mapActions(['actionTest']),
  },
  created() {
    this.actionTest()
  },
};
</script>
