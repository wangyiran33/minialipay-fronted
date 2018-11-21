import React, { Component } from 'react';
import { Result } from "antd-mobile";
import createPage from "../basePage";
import showPage from "../../util/showPage";

const myImg = src => <img src={src} className="spe am-icon am-icon-lg" alt=""/>;

export default class PaymentSuccessPage extends Component {

  pageTitle = "支付成功";

  render() {
    return createPage.call(this, <div>
      <Result
        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
        title="支付成功"
        message={<div
          onClick={() => {
            this.close("123");
            showPage(PaymentSuccessPage);
          }}>{(this.props.actualPrice).toFixed(2)}元 <del>{(this.props.price).toFixed(2)}元</del>
        </div>}
      />
    </div>);
  }
}