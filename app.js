import 'react-native-gesture-handler';
import * as React from 'react';
import {View,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";

  export default class App  extends Component{
  render(){
    return(
    <View>
    <Text>Blog de notas</Text>    
    </View> 
    )
  }
  }

  
  