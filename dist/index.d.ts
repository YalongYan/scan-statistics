interface propTypes {
  email: string;
  userName: string;
  requestUrl?: string;
  browserUrl: string;
  env: string;
  platform: string;
}
declare const handleStatisticsRequest: (obj: propTypes) => any;
export default handleStatisticsRequest;
