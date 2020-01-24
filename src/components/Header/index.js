import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Fonts} from '../../constant/Style';

const {ZillaSlab} = Fonts;

class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    defaultHeaderImage: null,
    defaultHeaderColor: null,
    leftIcon: null,
    rightIcon: null,
    title: null,
    titleStyle: null,
    headerHeight: null,
  };

  render() {
    const {leftIcon, rightIcon, title, headerHeight} = this.props;

    return (
      <View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            height: headerHeight ? headerHeight : hp('8%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "center"
          }}>
          {leftIcon}
          {rightIcon}
        </View>
        {title && (
          <View
            style={{
              width: wp('90%'),
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('6%'),
                fontFamily: ZillaSlab[1],
              }}>
              {title}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(CustomHeader);
