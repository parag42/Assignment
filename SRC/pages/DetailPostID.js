

import {
    View,
    Text
   
  } from 'react-native';
  
  import React, {Component} from 'react';
  
  import styles from '../Utils/Styles'
  export default class DetailPostID extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
       
      };
    }
  
    static navigationOptions = {
      title: 'Detail',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
      
    };
  
    componentDidMount() {
      
     
    }
    
  
    render() {
      let data = [
     
      ];
      return (
        <View style={styles.mainContainer}>
        
                  <Text style={styles.cellText}>
                    Name  : {this.props.navigation.state.params.name}
                  </Text>

                  <Text style={styles.cellText}>
                  Email  : {this.props.navigation.state.params.email}
                  </Text>

                  <Text style={styles.cellText}>
                  Body  : {this.props.navigation.state.params.body}
                  </Text>
                  
                </View>
             
        
      );
    }
  
    
  }
  