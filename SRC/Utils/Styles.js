import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    //marginTop: 10,
  },

  flatlist: {
    height: 300,
    // marginTop: 20,
  },

  touchableOpacityStyle: {
    height: 100,
    width: window.width - 50,
    borderRadius: 2,
  },
  
  cellText: {
    margin: 3,
    width: 300,
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
  },
  
  activityIndicator: {
    flex: 1,
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailPlainCell: {
    backgroundColor: 'white',
    width: window.width - 50,
    alignItems: 'flex-start',
    height: 100,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  }
  
});

export default styles;
