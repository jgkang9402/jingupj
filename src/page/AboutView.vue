<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KakaoMap :longitude="126.936424" :latitude="33.462147" :content="'성산일출봉(UNESCO세계자연유산)'"/>
    <p>주소 :  제주특별자치도 서귀포시 성산읍 성산리 1</p>
    <p class="gray">#일출 #오름 #경관/포토 #부모</p>
    <p>바다위에 우뚝 솟아난
수성화산·유네스코
세계자연유산, 천연기념물
제420호, 올레1코스</p>
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
<style>
  .gray{
    color: lightgray;
  }

</style>