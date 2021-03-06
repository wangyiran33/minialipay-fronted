import React, { Component } from 'react';
import $ from 'jquery';
import { Button } from "antd-mobile";
import createPage from "../basePage";
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

export default class Qrcodepay extends Component {

    pageTitle = "AA付款确认";

    render() {
        return createPage.call(this,
            <div>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <InputItem id = "IU"

                    //{...getFieldProps('autofocus')}
                           clear
                           value={this.props.username}
                           editable={false}
                    //ref={el => this.autoFocusInst = el}
                >账号</InputItem>
                <WhiteSpace size="lg" />


                <InputItem id = "AM"
                    //{...getFieldProps('password')}
                           clear
                           value={this.props.meanpay}
                           editable={false}
                    //type = "money"
                    //moneyKeyboardAlign="left"

                >金额</InputItem>
                <WhiteSpace size="lg" />

                <Button type="primary" onClick={() => {
                    $.ajax({
                        type:"post",
                        url:"http://10.162.64.234:8080/transfer",
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
                            showPage(PaymentSuccessPage, {
                                actualPrice: $("#AM").val(),
                                price: $("#AM").val()
                            }).then(result => console.log("Page result:", result));
                        },
                        error:function(error){console.log("no result");}
                    })

                }}>
                    <i className="fa fa-rmb"/> Pay
                </Button>
            </div>);
    }
}
