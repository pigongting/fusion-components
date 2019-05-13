import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import './font/iconfont.scss';

export default class FusionIcon extends Component {
  render() {
    const { type, size, color } = this.props;
    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(size))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(size))}` : ''
    }
    const colorStyle = {
      color: color
    }
    const mergeStyle = Object.assign({}, sizeStyle, colorStyle);

    return (
      <Text
        className={`iconfont ${type}`}
        style={mergeStyle}
      />
    );
  }
}
