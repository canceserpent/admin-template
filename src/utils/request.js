import axios from "axios";

const request = axios.create({
    baseURL: '' // 请求的基础路径
})

export default request