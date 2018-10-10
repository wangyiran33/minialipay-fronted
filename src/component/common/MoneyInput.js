import React from '@alipay/bigfish/react'
import { List, InputItem } from 'antd-mobile'

class MoneyInput extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (!this.props.skipInitialFocus) {
        this.inputRef.focus()
      }
    }, 400);
  }

  normalize = (v, prev) => {
    if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
      if (v === '.') {
        return '0.';
      }
      return prev;
    }
    return v;
  }

  onChange = v => {
    this.props.onChange(this.normalize(v, this.props.value))
  }

  render() {
    const { value, onChange } = this.props

    return (
      <div style={{ paddingBottom: 20 }}>
        <List>
          <InputItem
            value={value}
            onChange={this.onChange}
            ref={el => this.inputRef = el}
            type='money'
            clear
            placeholder="请输入金额"
            moneyKeyboardAlign="left"
            onVirtualKeyboardConfirm={() => {
              if (this.props.onVirtualKeyboardConfirm) {
                this.props.onVirtualKeyboardConfirm();
              }
            }}
          >
            <span style={{ paddingLeft: 14 }}>金额</span>
          </InputItem>
        </List>
      </div>
    )
  }
}

export default MoneyInput