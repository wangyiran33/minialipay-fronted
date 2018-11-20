import React, { Component } from 'react';
import $ from 'jquery';
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
import Global from "../../Constants/Global.js"

export default class PaymentInformationPage extends Component {

  pageTitle = "填写支付信息";

  render() {
    return createPage.call(this,
    <div>
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <InputItem id = "IU"
        //{...getFieldProps('autofocus')}
        clear
        placeholder="请输入账号"
        //ref={el => this.autoFocusInst = el}
    >账号</InputItem>
    <WhiteSpace size="lg" />


    <InputItem id = "AM"
        //{...getFieldProps('password')}
        clear
        placeholder="请输入金额"
    >金额</InputItem>
    <WhiteSpace size="lg" />

    <Button type="primary" onClick={() => {
          $.ajax({
              type:"post",
              url:"http://47.101.4.126:80/transfer",
              headers :{
                'Authorization':Global.headerToken
              },
              data: {
                in_username:$("#IU").val(),
                amount:$("#AM").val()
              },

              success: function (result) {
                  console.log($("#IU").val());
                  console.log($("#AM").val());
                  console.log(result);
                  //showPage(PaymentSuccessPage, {
                    //actualPrice: $("#AM").val(),
                    //price: $("#AM").val()
                  //}).then(result => console.log("Page result:", result));
              },
              error:function(error){console.log("no result");}
          })

    }}>
      <i className="fa fa-rmb"/> Pay
    </Button>
    </div>);
  }
}
