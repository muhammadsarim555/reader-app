import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  Text,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import MenuIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../constant/Style';
import {Components} from '../../components';
import {LexendDeca} from '../../constant/Style/fonts';
import {store} from '../../store';
import {onGetInfo} from '../../store/Actions';

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
    const {bookData, fetchLoading} = store.getState().auth;

    store.dispatch(onGetInfo());

    this.unsubscribe = store.subscribe(() => {
      console.log(fetchLoading, 'fetchLoading');
      this.setState({data: bookData, isLoader: fetchLoading});
    });
  }

  render() {
    const {data, isLoader} = this.state;
    const {bookData} = store.getState().auth;

    console.log(bookData, 'ddd');

    return (
      <View style={{flex: 1}}>
        <Components.Header leftIcon={leftIcon()} />

        <ScrollView>
          <View
            style={{
              height: hp('30%'),
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

          {isLoader ? (
            <ActivityIndicator
              size="large"
              color="black"
              style={{justifyContent: 'center', alignItems: 'center'}}
            />
          ) : (
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={bookData}
              horizontal={false}
              numColumns={2}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                      this.props.navigation.navigate('BookDescription', item)
                    }>
                    <Image
                      style={styles.cardImage}
                      source={{
                        uri: `https://hellomoto123.herokuapp.com/${item.bookImage}`,
                      }}
                      resizeMode={'cover'}
                    />

                    <LinearGradient
                      colors={['transparent', 'black']}
                      start={{x: 0.1, y: 0.4}}
                      end={{x: 0.6, y: 1.5}}
                      locations={[0.0, 0.35, 0.99]}
                      style={{
                        position: 'absolute',
                        top: 2,
                        bottom: 10,
                        width: '100%',
                        height: '100%',
                        alignSelf: 'center',
                        opacity: 0.4,
                        borderRadius: 20,
                      }}
                    />

                    <View
                      style={{
                        position: 'absolute',
                        justifyContent: 'space-between',
                        bottom: 15,
                      }}>
                      <Text style={styles.title}>{item.bookName}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          )}
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
