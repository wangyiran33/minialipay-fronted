import React, { Component } from 'react';
import { NavBar, Icon } from "antd-mobile";
import classNames from 'classnames'
import styles from "./basePage.module.scss";

const animationLength = 350;

export class BasePage extends Component {

  state = {
    phase: 0
  };

  modalDidMount() {
    if (this.state.phase === 0) {
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          this.setState({
            phase: 1
          });
        });
      });
    }
  }

  render() {
    return <div
      ref={(ref) => {
        if (ref) {
          this.modalDidMount(ref);
        }
      }}
      className={classNames({
        "page-root": true,
        [styles.root]: true,
        [styles.fadeInStart]: this.state.phase === 0,
        [styles.fadeOutStart]: this.state.phase === 2,
      })}
    >

      {this.props.children}
    </div>;
  }

}

export default function createPage(jsx) {
  let fadeOut;

  let refCallback = (ref) => {
    if (ref) {
      fadeOut = () => {
        return new Promise(function (resolve) {
          ref.setState({
            phase: 2
          }, () => {
            setTimeout(() => {
              resolve();
            }, animationLength);
          });
        });
      };
    }
  };

  this.close = (...args) => {
    if (!args.length) {
      this.props.close(null, animationLength);
    } else {
      this.props.close(...args, animationLength);
    }
    fadeOut();
  };

  // 仅供 NavBar / overrideNavBar 使用，不得 Override
  this.onLeftClick = () => {
    return (this.onBackClick || (() => this.close(null)))();
  };

  return <BasePage ref={refCallback}>
    {this.props.overrideNavBar ? this.props.overrideNavBar(this) : <NavBar
      mode={this.navbarMode || "light"}
      icon={<Icon type="left"/>}
      onLeftClick={this.onLeftClick}
      className={this.props.navBarClass || ""}
    >
      {this.pageTitle}
    </NavBar>}

    {jsx}

  </BasePage>
}

export  function createPageWithoutBack(jsx) {
    let fadeOut;

    let refCallback = (ref) => {
        if (ref) {
            fadeOut = () => {
                return new Promise(function (resolve) {
                    ref.setState({
                        phase: 2
                    }, () => {
                        setTimeout(() => {
                            resolve();
                        }, animationLength);
                    });
                });
            };
        }
    };

    this.close = (...args) => {
        if (!args.length) {
            this.props.close(null, animationLength);
        } else {
            this.props.close(...args, animationLength);
        }
        fadeOut();
    };

    // 仅供 NavBar / overrideNavBar 使用，不得 Override
    this.onLeftClick = () => {
        return (this.onBackClick || (() => this.close(null)))();
    };

    return <BasePage ref={refCallback}>
        {this.props.overrideNavBar ? this.props.overrideNavBar(this) : <NavBar
            mode={this.navbarMode || "light"}
            //icon={<Icon type="left"/>}
            //onLeftClick={this.onLeftClick}
            className={this.props.navBarClass || ""}
        >
            {this.pageTitle}
        </NavBar>}

        {jsx}

    </BasePage>
}