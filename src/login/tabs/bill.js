import React, { Component } from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class BillPage extends Component {
  render() {
    return (<div>
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