

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
  } from 'react-native';
  
  import React, {Component} from 'react';
  
  import styles from '../Utils/Styles'
  const axios = require('axios');
  export default class PostIDList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isNetworkConnected: false,
        isActivityLoading: false,
       
       
        dataSource: [],
       
      };
    }
  
    static navigationOptions = {
      title: 'Post IDs',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
      
    };
  
    componentDidMount() {
      this.onPressRow = this.onPressRow.bind(this);
      this.startActivityIndicator = this.startActivityIndicator.bind(this);
      this.fetchPostIds();
      
     
    }
    closeActivityIndicator = () =>
      this.setState({
        isActivityLoading: false,
      });
  
    startActivityIndicator = () =>
      this.setState({
        isActivityLoading: true,
      });
  
    render() {
      
      return (
        <View style={styles.mainContainer}>
        
        
  
          {this.state.isActivityLoading ? (
            <ActivityIndicator
              animating={this.state.isActivityLoading}
              color="#bc2b78"
              size="large"
              hidesWhenStopped={true}
              styles={styles.activityIndicator}
            />
          ) : null}
  
          <FlatList
            style={styles.FlatList}
            data={this.state.dataSource}
            renderItem={({item}) => (
              <TouchableOpacity
                
                style={styles.touchableOpacityStyle}
                onPress={() => this.onPressRow(item)}>
                <View style={styles.detailPlainCell}>
                  <Text style={styles.cellText}>
                    Post ID :  {item.postId}
                  </Text>
                  
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  
    fetchPostIds() {
      var url = 'https://jsonplaceholder.typicode.com/comments';
      this.startActivityIndicator();

      axios.get(url, null)

      .then((response) => {

        if (response.status == 200){
        this.setState({
            dataSource: response.data,
            isActivityLoading: false,
          });

        }

     });

      
    }
  
    
  
    onPressRow(selectedItem) {
      this.props.navigation.navigate('detail', selectedItem);
    }
  }
  