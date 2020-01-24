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

import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../constant/Style';
import {Components} from '../../components';
import {LexendDeca} from '../../constant/Style/fonts';
import PDFView from 'react-native-view-pdf';
import {withNavigation} from 'react-navigation';

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
      }}
      onPress={() => props.navigation.goBack()}>
      <BackIcon name="keyboard-backspace" size={30} color={BLACK} />
    </TouchableOpacity>
  );
};

const resources = {
  url:
    'https://hellomoto123.herokuapp.com/uploads/1579857052644html_tutorial.pdf',
};

class BookDescription extends React.Component {
  state = {
    bookInfo: {},
    isLoader: true,
  };

  componentDidMount() {
    this.setState({bookInfo: this.props.navigation.state.params});
  }

  reloadPDF = e => {
    this.setState({isLoader: e});
  };

  render() {
    const {isLoader, bookInfo} = this.state;
    const resourceType = 'url';

    return (
      <View style={{flex: 1}}>
        <Components.Header leftIcon={leftIcon(this.props)} />

        <View style={{height: hp('10%'), margin: 20}}>
          <Text style={styles.title}>{bookInfo.bookDescription}</Text>
        </View>

        {isLoader && (
          <ActivityIndicator
            size="large"
            color="black"
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
        )}

        <PDFView
          fadeInDuration={250.0}
          style={{flex: 1}}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => this.reloadPDF(false)}
          onError={() => console.log('Cannot render PDF', error)}
        />
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
    fontSize: hp('2%'),
    flex: 1,
    borderRadius: 20,
    fontFamily: LexendDeca,
    color: BLACK,
    marginLeft: wp('3%'),
  },
});

export default withNavigation(BookDescription);
