#### 使用方法
```
import handleStatisticsRequest from 'scan-statistics';

let obj = {
  browserUrl: "http://aaa.com"
  email: "xxx@xxx.com"
  env: "prod"
  platform: "xxx"
  userName: "xxx"
  requestUrl: "xxxx"
}
let url = 'xxxxx.com'
handleStatisticsRequest(obj, url);
```
上述 `obj`中的参数，只有`requestUrl` 是非必传的，其他都是必传的
`url` 是非必传的，不传就用本地的服务，如果有线上地址，把url赋值为线上地址即可