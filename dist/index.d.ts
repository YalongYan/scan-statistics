interface propTypes {
    email: string;
    userName: string;
    requestUrl?: string;
    browserUrl: string;
    env: string;
    platform: string;
}
/**
 *
 * @param obj 请求的参数 包含 email、userName、requestUrl、browserUrl、env、platform; 其中 requestUrl 非必传，其他都是必传的
 * @param url 请求要使用的接口地址，默认是本地的服务地址
 * @returns
 */
declare const handleStatisticsRequest: (obj: propTypes, url?: string) => void;
export default handleStatisticsRequest;
