import React, { Component } from 'react';
import { List } from 'antd-mobile';
import $ from "jquery";
import Global from "../../Constants/Global";

const Item = List.Item;
const Brief = Item.Brief;
let numbers = [];

export default class BillPage extends Component {

  render() {
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
                  numbers = temp;

              },error:function(error){
                  console.log(error);
              }
          }
      )


    return (
      <div>
        <List  className="my-list">
          {
            numbers.map(function(item,index){
              console.log(item.trans_remarks)
              return <Item key = {index} extra={item.trans_type==0?-item.trans_cost:item.trans_cost} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                  {item.trans_obj_name} <Brief>{item.trans_year}-{item.trans_month}-{item.trans_day} {item.trans_time}</Brief>
              </Item>
            })

          }

        </List>
    </div>);
  }
}
