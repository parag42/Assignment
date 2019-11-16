/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import PostIDList from './SRC/pages/PostIDList';
import DetailPostID from './SRC/pages/DetailPostID';




const AppStack = createStackNavigator(
  {
    home: PostIDList,
    detail : DetailPostID
    
  },
  {
    initialRouteName: 'home',
  },
);

const App = createAppContainer(AppStack);

export default App;