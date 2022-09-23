<template>
  <div id="map">
		asd
  </div>
</template>

<script>

export default {
  name: 'KakaoMap',
  components: {
  },
	props: {
		latitude : {
			type : Number,
			default : 33.450701
		},
		longitude : {
			type : Number,
			default : 126.570667
		},
	},
	data() {
		return{
			address : '서울시 용산구 백범로99길 40',
		}
	},
	methods : {
		initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 4,
      };

      this.map = new kakao.maps.Map(container, options);
		},
	},

	mounted() {
		console.log(process.env.VUE_APP_KAKAOMAP_KEY)
		if (window.kakao && window.kakao.maps) {
    this.initMap();
  } else {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap);
    script.src =
      `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAOMAP_KEY}&autoload=false`;
    document.head.appendChild(script);
  }
	},
};



</script>






<style>
	#map {
  width: 400px;
  height: 400px;
}
</style>
