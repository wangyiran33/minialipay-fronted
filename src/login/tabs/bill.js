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
      let name;

      $.ajax(
          {
              type:"post",
              url:"http://10.162.64.234:8080/bill/trans",
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
                if(item.trans_type == 0)
                    name = item.trans_obj_name;
                else
                    name = item.trans_name;
              console.log(item.trans_remarks)
              return <Item key = {index} extra={item.trans_type==0?-item.trans_cost:"+"+item.trans_cost.toString()} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                  {name} <Brief>{item.trans_year}-{item.trans_month}-{item.trans_day} {item.trans_time}</Brief>
              </Item>
            })

          }

        </List>
    </div>);
  }
}
