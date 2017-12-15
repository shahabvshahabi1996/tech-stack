import React , {Component} from 'react';
import { Text , View } from 'react-native';


export default class Header extends Component{
  render(){
    return(
        <View style={{height :  60,justifyContent : 'center',alignItems : 'center',backgroundColor : '#eee',padding : 15}}>
            <Text style={{fontSize : 20,color : '#252525'}}>
                {this.props.children}
            </Text>
        </View>
    );
  }
}


const Styles = {


}