
import React, { Component } from 'react';

import $ from 'jquery';
//import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';
//import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import HomePage from "../../pages/HomePage/HomePage"
import showPage from "../../util/showPage";
//import { createForm } from 'rc-form';
import imgURL from '../../images/sjtu22.png';
import createPage from "../basePage";
//import {lockBackButton, unlockBackButton} from "../util/showPage";
//import QrService from "../../native/QrService";
//import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";
import showAlertModal from "../../util/showAlertModal";


export default class RegisterPage extends React.Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        //const { getFieldProps } = this.props.form;
        return createPage.call(this,
            <div>
                <WhiteSpace size="lg" />
                <div align="center">
                    <img src={imgURL } alt="homepageicon" width="50%" height="50%" align="middle"/>
                </div>
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
                    type="password"
                    placeholder="******"
                >密码</InputItem>
                <WhiteSpace size="lg" />


                <Button type="primary" onClick={() => {
                    showPage(HomePage).then(result => console.log("Page result:", result));
                    $.post("http://192.168.1.114:8080/user/register",{
                            username:"12345",
                            password:"12345"
                        },
                        function(result){
                            console.log({title: "result", message: result});
                            //alert("数据: \n" + data + "\n状态: " + status);
                        },
                        "json");
                }}>
                    注册
                </Button>

            </div>);
    }
}

//const LoginPageWrapper = createForm()(LoginPage);
//ReactDOM.render(<LoginPageWrapper />, mountNode);
