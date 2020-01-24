import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// PACKAGES
import {Form, Item, Input, Label} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// FILES
import {Components} from '../../components';
import {scaleSize} from '../../constant/Style/typography';
import {Colors, Fonts, PatuaOne} from '../../constant/Style';

const {ORANGECOLOR, GRAY, DARKGRAY, WHITECOLOR, REDCOLOR} = Colors;
const {LexendDeca, Lato, OpenSansCustom, Ubuntu} = Fonts;

export default class Login extends Component {
  state = {phoneNumber: '', errors: null, loader: false};

  validation = () => {
    const {phoneNumber} = this.state;

    return new Promise(function(resolve, reject) {
      resolve(setTimeout(() => console.log('from settimeout'), 1000));
      reject(
        !phoneNumber.length < 11 && alert('Your Number Format is not Correct'),
      );
    });
  };

  onLogin = () => {
    const {phoneNumber} = this.state;
    const nav = this.props.navigation;

    // this.validation().then(s => console.log("success")).catch(e => console.log("error"))
    this.setState({loader: true});

    phoneNumber.length < 11
      ? this.setState({
          errors: {isValid: false, message: 'Can not verify Number'},
          loader: false,
        })
      : setTimeout(() => {
          this.setState({loader: false});
          nav.navigate('Home');
        }, 1000);
  };

  render() {
    const {errors, loader} = this.state;

    return (
      <View style={{flex: 1}}>
        <Components.Header title={'Login'} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              height: hp('50%'),
              alignSelf: 'center',
              width: wp('100%'),
              justifyContent: 'space-evenly',
            }}>
            <Form style={{width: wp('90%'), alignSelf: 'center'}}>
              <Item
                floatingLabel
                placeholderTextColor={errors ? REDCOLOR : DARKGRAY}
                style={{
                  height: hp('10%'),
                  borderBottomColor: errors && REDCOLOR,
                }}>
                <Label
                  style={{
                    color: errors ? REDCOLOR : DARKGRAY,
                    fontFamily: LexendDeca,
                  }}>
                  Phone number
                </Label>
                <Input
                  style={{color: GRAY}}
                  keyboardType={'numeric'}
                  onChangeText={e => this.setState({phoneNumber: e})}
                />
              </Item>
              <View
                style={{
                  width: wp('80%'),
                  alignItems: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: REDCOLOR,
                    fontSize: hp('2%'),
                    fontFamily: LexendDeca,
                  }}>
                  {errors && errors.message}
                </Text>
              </View>
            </Form>

            <Components.CustomButton
              title={'NEXT'}
              callMethod={this.onLogin}
              loader={loader}
            />

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{fontFamily: LexendDeca}}>
                Already Have An Account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{color: '#ff5d46', fontFamily: LexendDeca}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
