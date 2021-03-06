import React, { Component } from 'react';
import { Button } from "antd-mobile";
import createPage from "../basePage";
import styles from "./index.module.scss"
import { List } from 'antd-mobile';
import $ from "jquery";
import Global from "../../Constants/Global";

const Item = List.Item;
const Brief = Item.Brief;
let numbers = [];

export default class BillsDetailPage extends Component {

  pageTitle = "账单明细";


  render() {
      let temp;
      let name;

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


      return createPage.call(this, <div className={styles.root}>
          <List  className="my-list">
              {
                  numbers.map(function(item,index){
                      if(item.trans_type == 1){
                          name = item.trans_name;
                      }
                      else
                          name = item.trans_obj_name;
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
