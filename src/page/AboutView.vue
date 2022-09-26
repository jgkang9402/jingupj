<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KakaoMap :longitude="this.longitude" :latitude="this.latitude" :content="this.content"/>
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
  data() {
		return {
			latitude : 0,
      longitude : 0,
      content : '',
		}
	},
  components: {
    KakaoMap
  },
  methods: {
  },
  created() {
    if(this.$route.query){
      this.latitude = this.$route.query.latitude
      this.longitude = this.$route.query.longitude
      this.content = this.$route.query.content
    }
  },
};
</script>
<style>
  .gray{
    color: lightgray;
  }

</style>