
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import HomePage from "../pages/HomePage/HomePage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import showPage from "../util/showPage";
import { createForm } from 'rc-form';
import imgURL from '../images/sjtu22.png';
import {lockBackButton, unlockBackButton} from "../util/showPage";
//import QrService from "../../native/QrService";
//import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";
import $ from "jquery";


export default class LoginPage extends React.Component {

    //pageTitle = "RegisterPage";
    componentDidMount() {
        // this.autoFocusInst.focus();
    }


    render() {
        //const { getFieldProps } = this.props.form;
        return (
            <div>
            <WhiteSpace size="lg" />
            <div align="center">
                <img src={imgURL } alt="homepageicon" width="50%" height="50%" align="middle"/>
            </div>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <InputItem id="UN"
                //{getFieldProps('UN')}
                clear
                placeholder="请输入账号"
                //ref={el => this.autoFocusInst = el}
            >账号</InputItem>
            <WhiteSpace size="lg" />


            <InputItem id="PW"
                //{getFieldProps('PW')}
                type="password"
                placeholder="******"
            >密码</InputItem>
            <WhiteSpace size="lg" />



            <Button type="primary" onClick={() => {
                //alert($("#UN").val());
               // let tokenUT = "";
                $.post("http://192.168.1.114:8080/tokens/login",{
                        username:$("#UN").val(),
                        password:$("#PW").val()
                    },
                    function(result){
                        let tokenU = result.data.tokenEntity.uid;
                        let tokenT = result.data.tokenEntity.token;
                        let tokenUT = tokenU + tokenT;
                        console.log(tokenUT);
                        showPage(HomePage,{tokenheader:tokenUT}).then(result => console.log("Page result:", result));
                        //alert("数据: \n" + data + "\n状态: " + status);
                    },
                    "json");
            }}>
                登录
            </Button>
            <WhiteSpace size="lg" />

            <Button type="primary" onClick={() => {
                showPage(RegisterPage).then(result => console.log("Page result:", result));
            }}>
                注册
            </Button>

        </div>)
    }
}

//const LoginPageWrapper = createForm()(LoginPage);
//ReactDOM.render(<LoginPageWrapper />, mountNode);