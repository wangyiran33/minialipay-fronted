import React, { Component } from 'react';
import { List,InputItem,WhiteSpace } from 'antd-mobile';
import imgURL from "../../images/user.svg";
import $ from "jquery";
import Global from "../../Constants/Global.js"
import showPage from "../../util/showPage";
import HomePage from "../../pages/HomePage/HomePage";

const Item = List.Item;
const Brief = Item.Brief;
//const aa = "123333333";

export default class UserPage extends Component {



  render() {
      let uname = "hahaha";
      $.ajax(
          {
              type:"get",
              url:"http://47.101.4.126:80/user",
              headers:{'Authorization':Global.headerToken},
              success: function (result) {
                  console.log(result);
                  uname = result.data.userEntity.username;
                  let ubalance = result.data.userEntity.balance;
                  let ued = result.data.userEntity.email_address;
                  let upm = result.data.userEntity.phone_num;
                  console.log(uname + ubalance + ued + upm);
                  //let tokenU = result.data.tokenEntity.uid;
                  //let tokenT = result.data.tokenEntity.token;
                  //let tokenUT = tokenU + tokenT;
                  //console.log(uname);
                  //showPage(HomePage,{tokenheader:tokenUT}).then(result => console.log("Page result:", result));
              },error:function(error){
                  console.log(error);
              }
          }


      )
    return (<div>
        <div align="center">
            <img src={imgURL } alt="homepageicon" width="50%" height="50%" align="middle"/>
          uname
        </div>

        <List >
            <InputItem
                value={uname}
                editable={false}
            >手机号</InputItem>
            <InputItem
                value="13131313@131313.com"
                editable={false}
            >电子邮箱</InputItem>
        </List>

    </div>);
  }
}