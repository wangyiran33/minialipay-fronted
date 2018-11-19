import React, { Component } from 'react';
import { Button } from "antd-mobile";
import createPage from "../basePage";
import styles from "./index.module.scss"
import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace} from 'antd-mobile';
import { createForm } from 'rc-form';
import {lockBackButton, unlockBackButton} from "../../util/showPage";
import QrService from "../../native/QrService";
import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";
import PaymentSuccessPage from "../../pages/PaymentSuccessPage";
import showPage from "../../util/showPage";

export default class PaymentInformationPage extends Component {

  pageTitle = "PaymentInformationPage";

  render() {
    return createPage.call(this,
    <div>
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <InputItem
        //{...getFieldProps('autofocus')}
        clear
        placeholder="请输入账号"
        //ref={el => this.autoFocusInst = el}
    >账号</InputItem>
    <WhiteSpace size="lg" />


    <InputItem
        //{...getFieldProps('password')}
        clear
        placeholder="******"
    >金额</InputItem>
    <WhiteSpace size="lg" />

    <Button type="primary" onClick={() => {
      showPage(PaymentSuccessPage, {
        actualPrice: 10000,
        price: 12000
      }).then(result => console.log("Page result:", result));
    }}>
      <i className="fa fa-rmb"/> Pay
    </Button>
    </div>);
  }
}