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
 * @param obj 请求的参数体
 * @param url 请求要使用的接口地址，默认是本地的服务地址
 * @returns
 */
declare const handleStatisticsRequest: (obj: propTypes, url?: string) => any;
export default handleStatisticsRequest;
