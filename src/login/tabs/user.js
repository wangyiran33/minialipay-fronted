import React, { Component } from 'react';
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile';
import imgURL from "../../images/1.jpeg";
import $ from "jquery";
import Global from "../../Constants/Global.js"
import showPage from "../../util/showPage";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Item = List.Item;
const Brief = Item.Brief;
//const aa = "123333333";

export default class UserPage extends Component {



  render() {
      let uname = "";
      let ubalance = "";
      let ued = "";
      let upm = "";
      $.ajax(
          {
              type:"get",
              url:"http://10.162.64.234:8080/user",
              async:false,
              headers:{'Authorization':Global.headerToken},
              success: function (result) {
                  console.log(result);
                  uname = result.data.userEntity.username;
                  ubalance = result.data.userEntity.balance;
                  ued = result.data.userEntity.email_address;
                  upm = result.data.userEntity.phone_num;
                  console.log(uname + ubalance + ued + upm);

              },error:function(error){
                  console.log(error);
              }
          }
      )

    return (
        <div>
        <div align="center">
            <img src={imgURL } alt="homepageicon" width="50%" height="50%" align="middle"/>
        </div>


            <InputItem
                value={uname}
                editable={false}
            >用户名</InputItem>
            <InputItem
                value={ubalance}
                disabled
            >余额</InputItem>
            <InputItem
                value={upm}
                editable={false}
            >手机号</InputItem>
            <InputItem
                value={ued}
                disabled
            >电子邮箱</InputItem>


        <Button type="primary" onClick={() => {
            this.setState()
        }}>注销
        </Button>


    </div>);
  }
}