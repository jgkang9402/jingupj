<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KakaoMap />
  </div>
</template>

<script>
import KakaoMap from '@/components/kakaoMap.vue';

export default {
  name: 'aboutView',
  components: {
    KakaoMap
},
  methods: {
  },
  created() {
  },
};
</script>
