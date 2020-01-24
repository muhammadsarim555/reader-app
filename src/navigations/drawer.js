//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// PACKAGES
import {Icon} from 'react-native-elements';
import ShareIcon from 'react-native-vector-icons/AntDesign';
import SettingIcon from 'react-native-vector-icons/Feather';
import SignalIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import {Colors} from '../constant/Style/colors';

// const {ORANGECOLOR} = Colors;
const ORANGECOLOR = "blue";

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage = 'https://www.bootdey.com/img/Content/avatar/avatar6.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'person',
        navOptionName: 'Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'group',
        navOptionName: 'Parent Connect',
        screenToNavigate: 'ParentConnect',
      },
      {
        navOptionThumb: 'question',
        navOptionName: 'Quizzer',
        screenToNavigate: 'Quizzo',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Result',
        screenToNavigate: 'Quizzo',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Notification',
        screenToNavigate: 'Notification',
      },
      {
        navOptionThumb: 'phone',
        navOptionName: 'Contact Us',
        screenToNavigate: 'ContactUs',
      },

      // {
      //   navOptionThumb: 'build',
      //   navOptionName: 'Subcribe Now',
      //   screenToNavigate: 'SubcribeNow',
      // },

      // {
      //   navOptionThumb: 'build',
      //   navOptionName: 'Share the App',
      //   screenToNavigate: 'ShareApp',
      // },
      // {
      //   navOptionThumb: 'build',
      //   navOptionName: 'Quiz Result',
      //   screenToNavigate: 'QuizResult',
      // },
      // {
      //   navOptionThumb: 'build',
      //   navOptionName: 'Buy & Sell',
      //   screenToNavigate: 'SelectScreen',
      // },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <ScrollView>
          {/*Top Large Image */}
          {/* <LinearGradient
            colors={['#5058a6', '#c775b0']}
            start={{x: 0.2, y: 0.2}}
            end={{x: 0.6, y: 0.1}}
            style={{
              height: hp('20%'),
              width: Dimensions.get('window').width - 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
                alignSelf: 'stretch',
              }}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginLeft: wp('5%'),
                }}>
                <Image
                  source={{uri: this.proileImage}}
                  style={styles.sideMenuProfileIcon}
                  resizeMode={'contain'}
                />

                <View
                  style={{
                    height: hp('7%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: hp('2.2%'),
                      fontFamily: 'LexendDeca-Regular',
                      color: 'white',
                      marginLeft: wp('5%'),
                    }}>
                    Hi, {'Naveen'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient> */}
          {/*Divider between Top Image and Sidebar Option*/}

          {/*Setting up Navigation Options from option array using loop*/}

          <View style={{width: '100%'}}>
            {this.items.map((item, key) => (
              <View
                //control for whole navigation drawer container
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: hp('7%'),

                  backgroundColor:
                    global.currentScreenIndex === key ? '#e0dbdb' : 'white',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: hp('9%'),
                    width: '100%',
                    // borderBottomColor: grayText,
                    // borderBottomWidth: 0.5,

                    backgroundColor:
                      global.currentScreenIndex === key ? '#e0dbdb' : 'white',
                  }}
                  onPress={() => {
                    global.currentScreenIndex = key;
                    this.props.navigation.navigate(item.screenToNavigate);
                  }}>
                  <View style={{marginRight: 10, marginLeft: 20}}>
                    <Icon
                      //Control all icons for styling
                      name={item.navOptionThumb}
                      size={hp('3%')}
                      color={ORANGECOLOR}
                    />
                  </View>

                  <Text
                    //control all text of navigation drawer
                    style={{
                      fontSize: hp('2%'),
                      width: wp('40%'),
                      height: hp('3%'),
                      fontFamily: 'LexendDeca-Regular',
                      color:
                        global.currentScreenIndex === key
                          ? '#6363FF'
                          : '#898989',
                    }}>
                    {item.navOptionName}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View
            style={{
              flex: 1,
              height: hp('30%'),
              borderTopColor: '#F1F1F1',
              borderTopWidth: 2,
            }}>
            <View
              style={{
                marginTop: hp('5%'),
                flexDirection: 'row',

                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                }}
                onPress={() => this.props.navigation.navigate('Setting')}>
                <SettingIcon
                  name="settings"
                  size={wp('6%')}
                  color="#c775b0"
                  style={{
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                }}>
                <ShareIcon
                  name="sharealt"
                  size={wp('6%')}
                  color="#c775b0"
                  style={{
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#F1F1F1',
                  justifyContent: 'center',
                }}>
                <SignalIcon
                  name="signal-variant"
                  size={wp('6%')}
                  color="#c775b0"
                  style={{
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    width: wp('17%'),
    height: hp('17%'),
    marginTop: hp('2%'),
    borderRadius: 150 / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});