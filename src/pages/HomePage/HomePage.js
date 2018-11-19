import React, { Component } from 'react';
import styles from '../../root/index.module.scss';
import { TabBar } from 'antd-mobile';
import { Result } from "antd-mobile";
import BillPage from "../../login/tabs/bill"
import MainHomePage from "../../login/tabs/home"
import UserPage from "../../login/tabs/user"
import {createPageWithoutBack} from "../basePage";
//import LoginPage from "./tabs/login"
// import TestPage from "./tabs/test"

export default class HomePage extends Component {
    state = {
        selectedTab: 0
    };

    render() {
        return createPageWithoutBack.call(this,<div className={styles.wrapper}>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                <TabBar.Item
                    title="主页"
                    key="home"
                    icon={<i className="fa fa-home"/>}
                    selectedIcon={<i className="fa fa-home"/>}
                    selected={this.state.selectedTab === 0}
                    onPress={() => {
                        this.setState({
                            selectedTab: 0,
                        });
                    }}
                >
                <MainHomePage/>
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

                </TabBar>

        </div>);
    }
}
