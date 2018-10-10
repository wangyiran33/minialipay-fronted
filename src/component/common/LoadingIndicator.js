import Spinner from 'react-spinkit';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './LoadingIndicator.module.scss';
import classNames from 'classnames'

const animationLength = 250;
const MASKED_DIV_CLASS_NAME = "masked-div";

export class LoadingIndicator extends React.Component {
  state = {
    phase: 0
  };

  componentDidMount() {
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

  fadeOut() {
    this.setState({phase: 2});
  }

  render() {
    return <div className={classNames({
      [styles.loadingIndicatorWrapper]: true,
      [styles.fadeInStart]: this.state.phase === 0,
      [styles.fadeOutStart]: this.state.phase === 2,
    })}>
      <Spinner name='folding-cube' color="#40a9ff" fadeIn="none"/>
      <div className="hint-text">
        载入中…
      </div>
    </div>;
  }
}

export function showLoadingIndicator(showWithMask) {
  let divRef = document.createElement("div");
  let reactRef = null;
  document.body.appendChild(divRef);

  ReactDOM.render(<LoadingIndicator ref={(ref) => {
    if (ref) {
      reactRef = ref;
    }
  }}/>, divRef);

  if (showWithMask) {
    let children = document.body.children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child !== divRef) {
        if (child.tagName === "DIV" && child.className.indexOf(MASKED_DIV_CLASS_NAME) < 0) {
          child.className = child.className + " " + MASKED_DIV_CLASS_NAME;
        }
      }
    }
  }

  return function hideLoadingIndicator() {
    reactRef.fadeOut();
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(divRef);
      document.body.removeChild(divRef);
      if (showWithMask) {
        let children = document.body.children;
        for (let i = 0; i < children.length; i++) {
          let child = children[i];
          if (child !== divRef) {
            if (child.tagName === "DIV" && child.className.indexOf(MASKED_DIV_CLASS_NAME) >= 0) {
              child.className = child.className.split(MASKED_DIV_CLASS_NAME).join("");
            }
          }
        }
      }
    }, animationLength);
  };
}

