import { Modal } from "antd-mobile";

const alert = Modal.alert;

export default function showAlertModal({title = "提示", message = "", okText = "好"} = {}) {
  return new Promise(resolve => {
    alert(title, message, [
      {text: okText, onPress: () => resolve()},
    ])
  })
};


window.showAlertModal = showAlertModal;