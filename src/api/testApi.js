import axios from "axios";

export default {
	async testFunc(param){
		console.log(param)
		const result = await axios.get(`https://api.visitjeju.net/vsjApi/contents//searchList?`, {
			params : param
		}) //
		.then((response)=>{
			return response.data
		})
		return result
	}
};
