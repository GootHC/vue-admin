import {serverUrl} from "./request"
//图片处理
export const dalImg=(url)=>{

    if(url){
      
    if(url.startsWith("http")){
        return url;
    }
    return serverUrl+url
}
return 'https://img0.baidu.com/it/u=3946238700,850577113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
}