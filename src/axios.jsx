import axios from "axios";
import {BASE_URL} from './constants/constant'
//ivide bas url enthu site nte domain anu axios vilikumbol epozum domain base url ayirikum
const instance = axios.create({
    baseURL: BASE_URL,
  });

  export default instance