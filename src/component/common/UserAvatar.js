import React, { Component } from '@alipay/bigfish/react';
import UserService from "~/service/user";
import createBlobUrlFromBase64 from "../../util/createBlobUrlFromBase64";

// 用来维持长宽比
export const transparent1x1Pixel = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export function stripBase64Header(url) {
  let regex = /^data:.+?;base64,\s*/;
  let match = regex.exec(url);
  if (!match) {
    return url;
  } else {
    return url.substr(match[0].length);
  }
}

const avatarCacheStore = new Map(); // userId => blob url

const pendingService = {};

export default class UserAvatar extends Component {

  state = {url: transparent1x1Pixel};

  async fetchAvatar(userId) {
    if (!userId) {
      this.setState({url: transparent1x1Pixel});
      return;
    }

    if (avatarCacheStore.has(userId)) {
      this.setState({url: avatarCacheStore.get(userId)});
      return;
    }

    let avatarData;

    if (!pendingService[userId]) {
      pendingService[userId] = UserService.getUserAvatar(userId);
    }

    avatarData = await pendingService[userId];

    if (!avatarData) {
      let url = transparent1x1Pixel;
      avatarCacheStore.set(userId, url);
      this.setState({url});
      return;
    }

    let url = createBlobUrlFromBase64(avatarData);
    avatarCacheStore.set(userId, url);
    this.setState({url});
  }

  componentDidMount() {
    this.fetchAvatar(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.fetchAvatar(nextProps.userId);
    }
  }

  render() {
    let props = {...this.props};
    delete props.userId;
    return <img {...props} src={this.state.url}/>
  }

}