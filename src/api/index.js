import axios from 'axios';

export const instance = axios.create({
  headers: {
    Key: "AUthoriztion",
    Value: "InFuser" + process.env.VUE_APP_API_KEY
    //   accept: '*/*',
    //   // withCredentials: true,
    //   // 'Content-Type': 'application/json; charset=utf-8',
    //   // 'Access-Control-Allow-Origin': '*',
    //   // 'Access-Control-Allow-Credentials': true,
    //   // 'Access-Control-Allow-Headers': 'Authorize'
  },
  baseURL: "api.odcloud.kr/api"
});
// request 설정
// response 설정

export default instance;
