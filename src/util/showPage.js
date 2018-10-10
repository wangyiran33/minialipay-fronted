import * as React from "react";
import ReactDOM from "react-dom";
import showConfirmModal from "./showConfirmModal";

let pageStack = [];

export function getPageStack() {
  return pageStack;
}

let lockLevel = 0;

export function lockBackButton() {
  lockLevel++;
}

export function unlockBackButton() {
  lockLevel--;
}

async function doBackButton() {
  if (lockLevel > 0) {
    return;
  }
  if (!pageStack.length) {
    if (await showConfirmModal({message: "是否退出本APP？"})) {
      navigator.app.exitApp();
    }
    return;
  }

  let page = pageStack[pageStack.length - 1];

  if (!page.onLeftClick) {
    if (page.refs && page.refs.wrappedComponent && page.refs.wrappedComponent.onLeftClick) {
      page.refs.wrappedComponent.onLeftClick();
      pageStack.pop();
    } else {
      console.warn("找不到关闭Page的方法：", page);
    }
  } else {
    page.onLeftClick();
    pageStack.pop();
  }
}

document.addEventListener("backbutton", doBackButton, false);
window.doBackButton = doBackButton;

let modalDomRefStack = [];

// 以 Promise 的方法子页面
export default function showPage(modalClass, props, options) {
  let divRef = document.createElement("div");
  divRef.className = "page-wrapper";

  if (options && options.wrapperClass) {
    divRef.className += " " + options.wrapperClass;
  }

  document.body.appendChild(divRef);
  // append dom ref
  if (modalDomRefStack.indexOf(divRef) < 0) {
    modalDomRefStack.push(divRef);
  }
  const ModalClass = modalClass;
  let modalRef = null;

  const clearUp = () => {
    ReactDOM.unmountComponentAtNode(divRef);
    try {
      document.body.removeChild(divRef);
    } catch (e) {
      console.warn(e);
    }
    // remove react virtual ref
    if (pageStack.indexOf(modalRef) >= 0) {
      pageStack.splice(pageStack.indexOf(modalRef), 1);
    }
    // remove dom ref
    if (modalDomRefStack.indexOf(divRef) >= 0) {
      modalDomRefStack.splice(modalDomRefStack.indexOf(divRef), 1);
    }
  };

  return new Promise((resolve) => {
    ReactDOM.render(
      <ModalClass
        {...props}
        close={(data, clearUpDelay = 0) => {
          resolve(data);
          setTimeout(() => {
            clearUp();
          }, clearUpDelay);
        }}
        ref={ref => {
          if (ref) {
            modalRef = ref;
            // append react virtual ref
            if (pageStack.indexOf(ref) < 0) {
              pageStack.push(ref);
            }
          }
        }}
      />, divRef);
  });
}