import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// PACKAGES
import {withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// FILES
import {Colors, Fonts} from '../../constant/Style/index';

const {ORANGECOLOR, WHITECOLOR} = Colors;
const {Ubuntu} = Fonts;

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    loader: false,
    title: '',
    callMethod: null,
  };

  render() {
    const {title, loader, callMethod} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={callMethod}>
        <Text style={{color: WHITECOLOR, fontSize: 16, fontFamily: Ubuntu[0]}}>
          {title}
        </Text>
        {loader && (
          <ActivityIndicator
            size="small"
            color={WHITECOLOR}
            style={{marginLeft: wp('5%')}}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('6.5%'),
    width: wp('90%'),
    backgroundColor: ORANGECOLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
});

export default withNavigation(CustomButton);
