import React, { Component } from 'react';
import { List } from 'antd-mobile';
import $ from "jquery";
import Global from "../../Constants/Global";

const Item = List.Item;
const Brief = Item.Brief;

export default class BillPage extends Component {
  render() {
      let tcost = "";
      let tname = "";
      let tyear = "";
      let tmonth = "";
      let tday = "";
      let ttype = "";
      let temp;
      $.ajax(
          {
              type:"post",
              url:"http://47.101.4.126:80/bill/trans",
              async:false,
              headers:{'Authorization':Global.headerToken},
              success: function (result) {
                  let tlength = result.data.content.length;
                  temp = result.data.content;
                  console.log(result.data.content[0]);
                  //uname = result.data.userEntity.username;
                 // ubalance = result.data.userEntity.balance;
                  //ued = result.data.userEntity.email_address;
                 // upm = result.data.userEntity.phone_num;
                 // console.log(uname + ubalance + ued + upm);
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
        <List  className="my-list">


            <Item extra="-110" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                张三 <Brief>2018-10-31</Brief>
            </Item>
            <Item extra="+120" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                李四 <Brief>2018-11-01</Brief>
            </Item>
            <Item extra="-50" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                王五 <Brief>2018-12-01</Brief>
            </Item>
            <Item extra="-50" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                王五 <Brief>2018-12-01</Brief>
            </Item>
            <Item extra="-50" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                王五 <Brief>2018-12-01</Brief>
            </Item>
        </List>
    </div>);
  }
}