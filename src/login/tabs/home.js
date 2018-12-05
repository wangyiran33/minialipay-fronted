import React, { Component } from 'react';
import {Button, Carousel, Flex, WingBlank} from "antd-mobile";
import showPage, { lockBackButton, unlockBackButton } from "../../util/showPage";
import PaymentSuccessPage from "../../pages/PaymentSuccessPage";
import PaymentInformationPage from "../../pages/PaymentInformationPage";
import BillPage from "../../pages/BillsDetailPage";
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
import imgURL1 from "../../images/1.jpeg";
import imgURL2 from "../../images/2.jpeg";
import imgURL3 from "../../images/3.jpeg";
import imgURL from "../../images/sjtu23.png";
import $ from "jquery";
let numbers;
let ttemp = {
    data: [imgURL1, imgURL2, imgURL3],
    imgHeight: 176,
}

export default class MainHomePage extends Component {

    //pageTitle = "RegisterPage";
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        // this.autoFocusInst.focus();
    }

  render() {
    let temp;

    $.ajax(
        {
            type:"post",
            url:"http://47.101.4.126:80/bill/trans",
            async:false,
            headers:{'Authorization':Global.headerToken},
            success: function (result) {
                let tlength = result.data.content.length;
                temp = result.data.content;
                console.log(result.data.content[0]);
                if(temp.length >0)
                    numbers = temp[0];

            },error:function(error){
                console.log(error);
            }
        }
    )
    let n = "";
    if (temp.length == 0){
        n = "Notice:还没有转账记录";
    }
    else if(temp[temp.length-1].trans_type == 0){
      n = "Notice:您给"+temp[temp.length-1].trans_obj_name+"转账"+temp[temp.length-1].trans_cost+"元";
    }
    else{
          n = "Notice:"+temp[temp.length-1].trans_name+"给您转账"+temp[temp.length-1].trans_cost+"元";
      }
    return <div>
    <div align="center">
        <img src={imgURL } alt="homepageicon" width="50%" height="50%" align="middle"/>
    </div>

    <NoticeBar mode="link" onClick={() => {
      showPage(BillPage).then(result => console.log("Page result:", result));
    }}>
    {n}
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
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />

      <WingBlank>
      <Carousel
      autoplay={false}
      infinite
      vertical
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
      >
      {ttemp.data.map(val => (
          //console.log(val);
      <a
          key={val}
          //{}
          //href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: ttemp.imgHeight }}
      >
      <img
          src={val}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
          // fire window resize event to change height
          window.dispatchEvent(new Event('resize'));
          this.setState({ imgHeight: 'auto' });
      }}
          />
          </a>
      ))}
  </Carousel>
      </WingBlank>


      <div hidden className={styles.confirmAndAlertDemo}>
        <Button size="small" onClick={() => {
          showConfirmModal({title: "Title", message: "Message"}).then(value => {
            showAlertModal({title: "result", message: JSON.stringify(value)});
          })
        }}>
          <i className="fa fa-info-circle"/> Show Confirm
        </Button>
      </div>

      <div hidden className={styles.exampleServiceDemo}>
        <Button size="small" onClick={() => {
          request.get('http://192.168.1.114:8080/greeting')
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

      <div hidden className={styles.ttsDemo}>
        <Button size="small" onClick={() => {
          TTSService.notifyTransferArrival(10000);
        }}>
          <i className="fa fa-volume-up"/> TTS Service DEMO
        </Button>
      </div>
    </div>
  }
}
