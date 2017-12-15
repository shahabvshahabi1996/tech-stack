import React , {Component} from 'react';
import { Text , View } from 'react-native';
import ListDetail from './ListDetail';
import Store from '../components/ListStore';
export default class List extends Component{
  render(){
    return(
        <View style={{justifyContent : 'center',alignSelf : 'stretch',alignContent : 'flex-start'}}>
          <ListDetail store={Store} />
        </View>
    );
  }
}
