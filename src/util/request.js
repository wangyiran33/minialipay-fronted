import request from "request-promise-native";
import { Toast } from "antd-mobile";
import { showLoadingIndicator } from "../component/common/LoadingIndicator";
import joinUrl from "./joinUrl";
import env from "../env";

function resolveUrl(endPoint) {
  return joinUrl(env.SERVER_URL, endPoint);
}


const DEFAULT_CONFIG = {
  hideLoading: false,
  loadingWithMask: true,
  headers: {}
};

export default async (endPoint, requestData = {}, config = DEFAULT_CONFIG) => {

  // 合并config
  config = {...DEFAULT_CONFIG, ...config};

  const showError = (message) => {
    if (!message) {
      return;
    }
    Toast.offline(message, 1.2); // 用offline纯粹是因为Toast的"哭脸"好看，这就是弹一条消息出来的效果
  };

  const headers = {
    ...config.headers,
    // 可以在此处自定义 Headers，如token
  };

  const params = {
    headers, endPoint, requestData
  };

  let hideLoadingIndicator;
  if (!config.hideLoading) {
    hideLoadingIndicator = showLoadingIndicator(config.loadingWithMask);
  }

  //TODO: 这部分逻辑可以自行修改，我这里假设了服务器返回 { success, errorMessage, data }
  return request({
    method: "POST",
    uri: resolveUrl(params.endPoint),
    headers: params.headers,
    json: true,
    form: {
      endPoint: params.endPoint,
      requestData: JSON.stringify([params.requestData]),
    },
  }).then(result => {
    if (!result.success) {
      return Promise.reject(result);
    }
    return result.data; // 没有错误，就返回data
  }).catch(e => {
    if (e) {
      showError(e.errorMessage || e.message); // 显示错误信息
    }
    return Promise.reject(e)
  }).finally(() => {
    if (hideLoadingIndicator) {
      hideLoadingIndicator();
    }
  });
}