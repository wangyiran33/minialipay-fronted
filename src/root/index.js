import React, { Component } from 'react';
import styles from './index.module.scss';
import { TabBar } from 'antd-mobile';

import BillPage from "./tabs/bill"
import HomePage from "./tabs/home"
import UserPage from "./tabs/user"
import LoginPage from "./tabs/login"
// import TestPage from "./tabs/test"
class Root extends Component {
  state = {
    selectedTab: 3
  };

  render() {
    return (<div className={styles.wrapper}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="主页"
          key="Home"
          icon={<i className="fa fa-star-o"/>}
          selectedIcon={<i className="fa fa-star"/>}
          selected={this.state.selectedTab === 0}
          onPress={() => {
            this.setState({
              selectedTab: 0,
            });
          }}
        >
          <HomePage/>
        </TabBar.Item>


        <TabBar.Item
          title="账单"
          key="Bill"
          icon={<i className="fa fa-list"/>}
          selectedIcon={<i className="fa fa-list"/>}
          selected={this.state.selectedTab === 1}
          onPress={() => {
            this.setState({
              selectedTab: 1,
            });
          }}
        >
          <BillPage/>
        </TabBar.Item>


        <TabBar.Item
          title="用户"
          key="User"
          icon={<i className="fa fa-user-o"/>}
          selectedIcon={<i className="fa fa-user"/>}
          selected={this.state.selectedTab === 2}
          onPress={() => {
            this.setState({
              selectedTab: 2,
            });
          }}
        >
          <UserPage/>
        </TabBar.Item>

        <TabBar.Item
            title="登陆"
            key="Login"
            icon={<i className="fa fa-star-o"/>}
            selectedIcon={<i className="fa fa-star"/>}
            selected={this.state.selectedTab === 3}
            onPress={() => {
                this.setState({
                    selectedTab: 3,
                });
            }}
        >
            <LoginPage/>
        </TabBar.Item>

        {/*<TabBar.Item*/}
          {/*title="测试"*/}
          {/*key="Test"*/}
          {/*icon={<i className="fa fa-star-o"/>}*/}
          {/*selectedIcon={<i className="fa fa-star"/>}*/}
          {/*selected={this.state.selectedTab === 4}*/}
          {/*onPress={() => {*/}
              {/*this.setState({*/}
                  {/*selectedTab: 4,*/}
              {/*});*/}
          {/*}}*/}
      {/*>*/}
          {/*<TestPage/>*/}
        {/*</TabBar.Item>*/}

      </TabBar>
    </div>);
  }
}

export default Root;
