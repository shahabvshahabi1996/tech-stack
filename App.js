import React , {Component} from 'react';
import { Text , View , ScrollView } from 'react-native';
import Header from './src/common/Header';
import List from './src/common/List';


export default class App extends Component{
  render(){
    return(
        <View style={{flex : 1}}>
          <Header>Tech Stack</Header>
          <ScrollView style={{flex : 1}}>
            <List/>
          </ScrollView>
        </View>
    );
  }
}
