import React, { Component } from 'react';
import { Button } from "antd-mobile";
import createPage from "../basePage";
import styles from "./index.module.scss"
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class BillsDetailPage extends Component {

  pageTitle = "BillsDetailPage";

  render() {
    return createPage.call(this, <div className={styles.root}>
      <List  className="my-list">
          <Item>账单</Item>
          <Item extra="-110" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              张三 <Brief>2018-10-31</Brief>
          </Item>
          <Item extra="+120" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              李四 <Brief>2018-11-01</Brief>
          </Item>
          <Item extra="-50" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              王五 <Brief>2018-12-01</Brief>
          </Item>
      </List>
    </div>);
  }
}
