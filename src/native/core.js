/**
 * 是否在真实手机上（即可使用native功能）
 */
export function nativeFeaturesAvailable() {
    return !!window.cordova;
}