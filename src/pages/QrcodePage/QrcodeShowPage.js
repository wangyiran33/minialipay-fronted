
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
//import {lockBackButton, unlockBackButton} from "../util/showPage";
//import QrService from "../../native/QrService";
//import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";
import showAlertModal from "../../util/showAlertModal";
import Global from "../../Constants/Global";
import redURL from "../../images/sjtu11.png";


export default class QrcodeShowPagePage extends React.Component {
    pageTitle = "收款码";

    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        let imgres = "";
        $.ajax({
                type:"post",
                url:"http://10.162.64.234:8080/Qrcode",
                async:false,
                headers:{'Authorization':Global.headerToken},
                success: function (result) {
                    //console.log(result);
                    //$("#qrcode").attr(src,result);
                    imgres = result.data.content;
                    //alert("注册成功！");
                    //this.props.history.push('../.././download')
                    //showPage(HomePage,{tokenheader:tokenUT}).then(result => console.log("Page result:", result));
                },error:function(error){
                    console.log(error);
                }

            }
        )
        //console.log("imgres: " + imgres);
        //const { getFieldProps } = this.props.form;
        return createPage.call(this,
            <div>
                <WingBlank style={{textAlign: 'center'}}>



                            <img src={"data:image/png;base64," + imgres}  alt="homepageicon" width="50%" height="50%" align="middle"/>


                </WingBlank>
                <WhiteSpace size="lg" />





            </div>);
    }
}

