import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import './font/iconfont.scss';

export default class FusionIcon extends Component {
  render() {
    const { type, size, color } = this.props;

    return (
      <Text
        className={`iconfont ${type}`}
        style={{
          fontSize: `${size}px`,
          color: color
        }}
      />
    );
  }
}
