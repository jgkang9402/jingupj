<template>
  <div>
		<div id="map"></div>
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
			default : 35.450701
		},
		longitude : {
			type : Number,
			default : 126.570667
		},

		content : {
			type : String,
			default : '상세지역'
		}
	},
	data() {
		return{
			map:'',
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
			const markerPosition  = new kakao.maps.LatLng(this.latitude, this.longitude); 

			const marker = new kakao.maps.Marker({position: markerPosition});

			marker.setMap(this.map);

			const iwContent = this.content,
    iwPosition = new kakao.maps.LatLng(this.latitude, this.longitude); 

		const infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
infowindow.open(this.map, marker); 
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
  width: 100%;
  height: 35rem;
	border-radius: 30px;
}
</style>
