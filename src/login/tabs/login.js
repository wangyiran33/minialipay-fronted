
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import imgURL from './../../images/sjtu.png';
import {lockBackButton, unlockBackButton} from "../../util/showPage";
import QrService from "../../native/QrService";
import showAlertModal from "../../util/showAlertModal";
import {Flex} from "antd-mobile/lib/flex";


export default class LoginPage extends React.Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        //const { getFieldProps } = this.props.form;
        return <div>
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

            <Button type="primary">
                登录
            </Button>

        </div>
    }
}

//const LoginPageWrapper = createForm()(LoginPage);
//ReactDOM.render(<LoginPageWrapper />, mountNode);