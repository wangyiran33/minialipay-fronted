import {nativeFeaturesAvailable} from "./core";

class QrService {
    scan() {
        return new Promise((resolve, reject) => {
            window.cordova.plugins.barcodeScanner.scan(
                function (result) {
                    resolve(result);
                },
                function (error) {
                    reject(error);
                },
                {
                    showFlipCameraButton: false,
                    showTorchButton: true,
                    resultDisplayDuration: 0,
                    formats: "QR_CODE",
                }
            );
        });
    }
}

class MockedService {
    async scan() {
        let value = prompt("请输入二维码扫码结果", "http://example.com");
        if (!value && value !== "") {
            return {
                text: "",
                format: "",
                cancelled: true
            };
        } else {
            return ({
                text: value,
                format: "QR_CODE",
                cancelled: false
            });
        }
    }
}


export default nativeFeaturesAvailable() ? new QrService() : new MockedService();