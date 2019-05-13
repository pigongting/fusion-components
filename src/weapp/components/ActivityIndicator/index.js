import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import '../../../style/components/ActivityIndicator.scss';

export default class ActivityIndicator extends Component {
  render () {
    const { size } = this.props;
    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(size))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(size))}` : '',
    }
    const mergeStyle = Object.assign({}, sizeStyle);

    return (
      <View className="fusion-ActivityIndicator" style={mergeStyle} />
    )
  }
}
