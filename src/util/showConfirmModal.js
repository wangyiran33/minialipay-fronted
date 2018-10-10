import { Modal } from "antd-mobile";

const alert = Modal.alert;

export default function showConfirmModal({title = "确定吗", message = "", okText = "是", cancelText = "否"} = {}) {
  return new Promise(resolve => {
    alert(title, message, [
      {text: cancelText, onPress: () => resolve(false)},
      {text: okText, onPress: () => resolve(true)},
    ])
  })
};


window.showConfirmModal = showConfirmModal;