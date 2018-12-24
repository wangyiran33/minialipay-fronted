
import React, { Component } from 'react';

import $ from 'jquery';
//import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace, Button, Carousel, WingBlank} from 'antd-mobile';

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
    pageTitle = "AA收款码";

    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        //console.log("imgres: " + imgres);
        //const { getFieldProps } = this.props.form;
        return createPage.call(this,
            <div>
                <WingBlank style={{textAlign: 'center'}}>



                    <img src={"data:image/png;base64," + this.props.base64code}  alt="homepageicon" width="50%" height="50%" align="middle"/>
                    <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                        <List.Item
                            multipleLine
                        >
                            人均收款金额/元
                            <List.Item.Brief>
                                {this.props.meancoin}
                            </List.Item.Brief>
                        </List.Item>

                    </List>


                </WingBlank>
                <WhiteSpace size="lg" />





            </div>);
    }
}

