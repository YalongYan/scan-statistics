// 只有 requestUrl 是非必传的 其他都是必传的
interface propTypes {
  email: string,
  userName: string,
  requestUrl?: string,
  browserUrl: string,
  env: string,
  platform: string
}

/**
 * 
 * @param obj 请求的参数 包含 email、userName、requestUrl、browserUrl、env、platform; 其中 requestUrl 非必传，其他都是必传的
 * @param url 请求要使用的接口地址，默认是本地的服务地址
 * @returns
 */
const handleStatisticsRequest: (obj: propTypes, url?: string) => void = async (obj, url) => {
  try {
    fetch(url || 'http://127.0.0.1:1153/scanStatic/addScanInfo', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  } catch (err) {
    console.log(err);
  }
}

// let obj = {
//   "email": "1",
//   "userName": "userName1",
//   "requestUrl": "requestUrl1",
//   "browserUrl": "browserUrl1",
//   "env": "env1",
//   "platform": "platform1"
// }

export default handleStatisticsRequest;