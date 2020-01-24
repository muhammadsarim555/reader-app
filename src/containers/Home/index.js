import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import {Item, Input} from 'native-base';
import MenuIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import BagIcon from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Pdf from 'react-native-pdf';

import {Colors} from '../../constant/Style';
import {Components} from '../../components';
import Tabs from '../../navigations/tabs';
import {LexendDeca} from '../../constant/Style/fonts';
import PDFView from 'react-native-view-pdf';

const {width} = Dimensions.get('screen');
const {BLACK, WHITECOLOR} = Colors;

const leftIcon = props => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MenuIcon name="align-left" size={30} color={BLACK} />
    </TouchableOpacity>
  );
};

const resources = {
  // file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url:
    'https://hellomoto123.herokuapp.com/uploads/1579857052644html_tutorial.pdf',
  // base64: 'JVBERi0xLjMKJcfs...',
};

export default class Home extends React.Component {
  state = {
    images: [
      'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/159712/books-read-stack-book-stack-159712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', // Network image
      'https://images.pexels.com/photos/1029808/pexels-photo-1029808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    data: [],
    isLoader: true,
  };

  componentDidMount() {
    fetch(`https://hellomoto123.herokuapp.com/addBooks/photos`)
      .then(json => json.json())
      .then(s => {
        this.setState({data: s});
      })
      .catch(e => console.log(e, 'errror'));
  }

  reloadPDF = e => {
    this.setState({isLoader: e});
  };

  render() {
    const {data, isLoader} = this.state;
    const resourceType = 'url';

    return (
      <View style={{flex: 1}}>
        <Components.Header leftIcon={leftIcon()} />
        {/* <View
          style={{
            height: hp('13%'),
            justifyContent: 'center',
            backgroundColor: '#FAFAFC',
          }}>
          <Item
            regular
            style={{
              width: wp('85%'),
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: WHITECOLOR,
              height: hp('6%'),
            }}>
            <SearchIcon name="search" size={30} color={BLACK} />
            <Input placeholder="Underline Textbox" />
            <FilterIcon name="filter" size={30} color={BLACK} />
          </Item>
        </View> */}
        <ScrollView>
          <View
            style={{
              // backgroundColor: 'red',
              height: hp('30%'),
              // justifyContent: 'center',
            }}>
            <View>
              <SliderBox
                images={this.state.images}
                autoplay={true}
                circleLoop={true}
                dotColor={'transparent'}
                inactiveDotColor={'transparent'}
                sliderBoxHeight={160}
              />
            </View>
          </View>
          {/* <View style={{height: 100}} />
            <View style={{height: 100}} />
            <View style={{height: 100}} />
            <View style={{height: 100}} />
            <View style={{height: 100}} />
            <View style={{height: 100}} />
            <View style={{height: 100}} />
          */}

          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={data}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({item}) => {
              console.log(item.bookImage, 'd');
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    this.props.navigation.navigate('BookDescription')
                  }>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: `https://hellomoto123.herokuapp.com/${item.bookImage}`,
                    }}
                  />

                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      top: 6,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.title}>{item.bookName}</Text>
                  </View>

                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'space-between',
                      bottom: 15,
                    }}>
                    <Text style={styles.title}>{item.bookDescription}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer: {
    justifyContent: 'space-around',
  },
  card: {
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 3,
    marginVertical: 10,
    backgroundColor: 'transparent',
    flexBasis: '45%',
    marginHorizontal: 10,
    height: hp('30%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  title: {
    fontSize: hp('2.5%'),
    flex: 1,
    borderRadius: 20,
    fontFamily: LexendDeca,
    color: 'white',
    marginLeft: wp('3%'),
  },
});
