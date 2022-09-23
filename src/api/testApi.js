import axios from "axios";

export default {
	async testFunc(param){
		const apikey = process.env.VUE_APP_API_KEY
		console.log(param)
		// const result = await axios.get('https://api.odcloud.kr/api/15049995/v1/uddi:1a0d90fb-c631-4c81-93cb-9cf2f7bf968e?page=1&perPage=20&serviceKey=7aItO9jD4xiRXPLO4QdwPOc1T0MZmFQHgEMd7X1FjIjIJivJYGVrlY3Qu2k9eYiE%2F%2BTBPBMjvlQNob8ugu74%2FQ%3D%3D').then((response)=>{
		const result = await axios.get(`https://api.odcloud.kr/api/15049995/v1/uddi:1a0d90fb-c631-4c81-93cb-9cf2f7bf968e?page=1&perPage=20&serviceKey=${apikey}`).then((response)=>{
			console.log(response.data)
		})
		console.log(result);
	}
};
