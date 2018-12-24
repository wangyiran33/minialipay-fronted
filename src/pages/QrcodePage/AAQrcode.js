
import React, { Component } from 'react';

import $ from 'jquery';
//import ReactDOM from 'react-dom';
import {Card, InputItem, WhiteSpace, Button, Carousel, WingBlank} from 'antd-mobile';

//import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import HomePage from "../../pages/HomePage/HomePage"
import showPage from "../../util/showPage";
//import { createForm } from 'rc-form';
import imgURL from '../../images/sjtu22.png';
import back from '../../root/index.js'
import createPage from "../basePage";
import AAQrcodeShowPage from "./AAQrcodeShowPage.js"
//import {lockBackButton, unlockBackButton} from "../util/showPage";
//import QrService from "../../native/QrService";
//import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";
import showAlertModal from "../../util/showAlertModal";
import Global from "../../Constants/Global";
import redURL from "../../images/sjtu11.png";
import PaymentSuccessPage from "../PaymentSuccessPage";

export default class AAQrcode extends Component {

    pageTitle = "AA收款";

    render() {
        return createPage.call(this,
            <div>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <InputItem id = "IU"
                    //{...getFieldProps('autofocus')}
                           clear
                           placeholder="填写金额"
                    //ref={el => this.autoFocusInst = el}
                >总金额</InputItem>
                <WhiteSpace size="lg" />


                <InputItem id = "AM"
                    //{...getFieldProps('password')}
                           clear
                    //type = "money"
                    //moneyKeyboardAlign="left"
                           placeholder="包括自己"
                >总人数</InputItem>
                <WhiteSpace size="lg" />

                <Button type="primary" onClick={() => {
                    console.log(($("#IU").val()/$("#AM").val()).toFixed(2));
                    $.ajax({
                        type:"post",
                        url:"http://10.162.64.234:8080/AAQrcode",
                        headers :{
                            'Authorization':Global.headerToken
                        },
                        data: {
                            coin:($("#IU").val()/$("#AM").val()).toFixed(2)
                        },

                        success: function (result) {

                            console.log($("#IU").val());
                            console.log($("#AM").val());
                            console.log(result);
                            showPage(AAQrcodeShowPage, {
                                base64code: result.data.content,
                                meancoin:($("#IU").val()/$("#AM").val()).toFixed(2)
                            }).then(result => console.log("Page result:", result));
                        },
                        error:function(error){console.log("no result");}
                    })

                }}>
                    发起收款
                </Button>
            </div>);
    }
}
