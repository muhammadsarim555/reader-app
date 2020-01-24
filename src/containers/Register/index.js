import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Item, Label, Input} from 'native-base';

// PACKAGES
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// FILES
import {Components} from '../../components';
import {scaleSize} from '../../constant/Style/typography';
import {Colors} from '../../constant/Style';

const {ORANGECOLOR, GRAY, DARKGRAY, WHITECOLOR, REDCOLOR, BLACK} = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => props.navigation.goBack()}>
      <BackIcon name="keyboard-backspace" size={30} color={BLACK} />
    </TouchableOpacity>
  );
};

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      phoneNnumber: '',
      errors: null,
      loader: false,
    };
  }
  // validation = () => {
  //   const {phoneNumber} = this.state;

  //   return new Promise(function(resolve, reject) {
  //     resolve(setTimeout(() => console.log('from settimeout'), 1000));
  //     reject(
  //       !phoneNumber.length < 11 && alert('Your Number Format is not Correct'),
  //     );
  //   });
  // };

  signUp = () => {
    const {phoneNumber, username} = this.state;
    const nav = this.props.navigation;
    // this.validation().then(s => console.log("success")).catch(e => console.log("error"))
    if (phoneNumber && username) {
      this.setState({loader: true, errors: false})
        // ? null
        // : setTimeout(() => {
        //     this.setState({loader: false});
        //     nav.navigate('Login');
        //   }, 500);
    } else {
      this.setState({
        errors: {
          isValid: false,
          message: 'Can not verify Number',
          massage2: 'Can,t Find User Name',
        },
        // loader: false,
      });
    }
  };

  render() {
    const {errors, loader} = this.state;
    return (
      <View style={styles.container}>
        <Components.Header leftIcon={leftIcon(this.props)} title={'Signup'} />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: hp('40%'), justifyContent: 'space-evenly'}}>
            <Item style={styles.input} floatingLabel>
              <Label style={{color: errors ? REDCOLOR : DARKGRAY}}>
                Full name
              </Label>
              <Input
                style={{color: 'gray'}}
                onChangeText={e => this.setState({username: e})}
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
                  fontFamily: 'LexendDeca-Regular',
                }}>
                {errors && errors.massage2}
              </Text>
            </View>
            <Item style={styles.input} floatingLabel>
              <Label style={{color: errors ? REDCOLOR : DARKGRAY}}>
                Phone number
              </Label>
              <Input
                keyboardType={'numeric'}
                style={{color: 'gray'}}
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
                  fontFamily: 'LexendDeca-Regular',
                }}>
                {errors && errors.message}
              </Text>
            </View>

            <Components.CustomButton
              title={'Signup'}
              callMethod={this.signUp}
              loader={loader}
            />
            <View style={styles.paragraph}>
              <Text>Already Have An Account ? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{color: '#ff5d46', fontFamily: 'LexendDeca-Regular'}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: hp('8%'),
    width: wp('80%'),
    borderBottomWidth: 1,
    // height: 50,
    borderColor: '#cdcdcd',
    margin: 10,
    // padding: 8,
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
  },
  paragraph: {
    display: 'flex',
    flexDirection: 'row',
  },

  Heading: {
    fontFamily: 'Times New Roman',
    fontSize: 50,
    width: wp('90%'),
    // backgroundColor: 'green',
  },
  inputContainer: {
    // backgroundColor: 'red',
  },
  Button: {
    backgroundColor: '#ff5d46',
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    height: hp('7%'),
  },
  container: {
    flex: 1,
  },
});
