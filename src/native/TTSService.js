import { nativeFeaturesAvailable } from "./core";
import numberToChineseWords from "number-to-chinese-words";

function genTransferNotificationText(amount) {
  return `支付宝 到账 ${numberToChineseWords.toWords(amount.toFixed(0) / 100)}元`
}

class TTSService {
  /**
   * @param amount 分
   */
  notifyTransferArrival(amount) {
    window.TTS.speak({
      text: genTransferNotificationText(amount),
      locale: 'zh-CN'
    });
  }
}

class MockedService {
  /**
   * @param amount 分
   */
  async notifyTransferArrival(amount) {
    console.log("%cTTS:%c " + genTransferNotificationText(amount), "background:yellow", "");
  }
}

export default nativeFeaturesAvailable() ? new TTSService() : new MockedService();