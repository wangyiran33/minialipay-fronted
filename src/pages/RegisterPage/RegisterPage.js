
import React, { Component } from 'react';

import $ from 'jquery';
//import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';
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
                <InputItem id="UNN"
                    //{...getFieldProps('autofocus')}
                    clear
                    placeholder="请输入账号"
                    //ref={el => this.autoFocusInst = el}
                >账号</InputItem>
                <WhiteSpace size="lg" />


                <InputItem id="PWW"
                    //{...getFieldProps('password')}
                    type="password"
                    placeholder="******"
                >密码</InputItem>
                <WhiteSpace size="lg" />

                <InputItem id="PM"
                    //{...getFieldProps('autofocus')}
                           clear
                           placeholder="请输入手机号"
                    //ref={el => this.autoFocusInst = el}
                >手机号</InputItem>
                <WhiteSpace size="lg" />

                <InputItem id="EM"
                    //{...getFieldProps('autofocus')}
                           clear
                           placeholder="请输入电子邮箱"
                    //ref={el => this.autoFocusInst = el}
                >邮箱</InputItem>
                <WhiteSpace size="lg" />


                <Button type="primary" onClick={() => {
                    console.log($("#PWW").val());
                    console.log($("#PM").val());
                    console.log($("#EM").val());
                    console.log($("#UNN").val());
                    //showPage(HomePage).then(result => console.log("Page result:", result));
                    $.ajax({
                            type:"post",
                            url:"http://192.168.1.114:8080/user/register",
                            data: JSON.stringify({
                                username:$("#UNN").val(),
                                password:$("#PWW").val(),
                                phone_num:$("#PM").val(),
                                email_address:$("#EM").val()
                            }),
                            contentType:"application/json",

                            //beforeSend: function (XMLHttpRequest)
                            //XMLHttpRequest.setRequestHeader("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOD.....")
                            success: function (result) {
                                console.log(result);
                                alert("注册成功！");
                                //this.props.history.push('../.././download')
                                //showPage(HomePage,{tokenheader:tokenUT}).then(result => console.log("Page result:", result));
                            },error:function(error){
                                console.log(error);
                            }

                        }
                    )
                }}>
                    注册
                </Button>

            </div>);
    }
}

//const LoginPageWrapper = createForm()(LoginPage);
//ReactDOM.render(<LoginPageWrapper />, mountNode);