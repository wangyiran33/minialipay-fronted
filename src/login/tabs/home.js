import React, { Component } from 'react';
import { Button, Flex } from "antd-mobile";
import showPage, { lockBackButton, unlockBackButton } from "../../util/showPage";
import PaymentSuccessPage from "../../pages/PaymentSuccessPage";
import PaymentInformationPage from "../../pages/PaymentInformationPage";
import BillsDetailPage from "../../pages/BillsDetailPage";
import showConfirmModal from "../../util/showConfirmModal";
import showAlertModal from "../../util/showAlertModal";
import styles from "./home.module.scss"
import ExampleService from "../../service/ExampleService";
import TTSService from "../../native/TTSService";
import QrService from "../../native/QrService";
import request from 'superagent';
import axios from 'axios';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import "../../pages/HomePage/HomePage.js"
import Global from "../../Constants/Global.js"
import HomePage from "../../pages/HomePage/HomePage";

export default class MainHomePage extends Component {
  render() {
    console.log(Global.headerToken);
    return <div>
    <NoticeBar mode="link" onClick={() => {
      showPage(BillsDetailPage).then(result => console.log("Page result:", result));
    }}>
    Notice: 李四给您转账120元
    </NoticeBar>
      <Flex>
        <Flex.Item>
          <Button type="primary" onClick={() => {
            showPage(PaymentInformationPage).then(result => console.log("Page result:", result));
          }}>
            <i className="fa fa-rmb"/> Pay
          </Button>
        </Flex.Item>

        <Flex.Item>
          <Button onClick={() => {
            lockBackButton();

            QrService.scan().then(value => {
              showAlertModal({title: "result", message: JSON.stringify(value)});
            }).finally(() => {
              setTimeout(() => {
                unlockBackButton();
              }, 1000);
            });
          }}>
            <i className="fa fa-camera"/> Scan QR
          </Button>
        </Flex.Item>

      </Flex>

      <div className={styles.confirmAndAlertDemo}>
        <Button size="small" onClick={() => {
          showConfirmModal({title: "Title", message: "Message"}).then(value => {
            showAlertModal({title: "result", message: JSON.stringify(value)});
          })
        }}>
          <i className="fa fa-info-circle"/> Show Confirm
        </Button>
      </div>

      <div className={styles.exampleServiceDemo}>
        <Button size="small" onClick={() => {
          request.get('http://47.101.30.171:8080/greeting')
          //ExampleService.sendExampleRequest("abc")
            .then(value => {

              showAlertModal({title: "result", message: value.text});
              console.log(value.text);
            })
            //.catch(ex => { // 捕获异常
              //console.log("捕获到异常：", ex, "是否启动了后端？");
            //})
        }}>
          <i className="fa fa-send"/>前后端连接尝试
        </Button>
      </div>

      <div className={styles.ttsDemo}>
        <Button size="small" onClick={() => {
          TTSService.notifyTransferArrival(10000);
        }}>
          <i className="fa fa-volume-up"/> TTS Service DEMO
        </Button>
      </div>
    </div>
  }
}
