import React , {Component} from 'react';
import { Text , View , TouchableOpacity , LayoutAnimation } from 'react-native';
import {observer} from 'mobx-react';
@observer
export default class ListDetail extends Component{
  render(){
    return(
        <View style={{justifyContent : 'center',alignSelf : 'stretch',alignContent : 'flex-start'}}>
            {this.props.store.List.map((libarary,index)=>{
                if(this.props.store.index == index)
                    return(
                        <View key={libarary.id}>
                            <View style={{borderColor : '#aaa',borderWidth : 1,padding : 15,backgroundColor : '#ddd'}}>
                                <Text style={{fontSize : 18,fontWeight : '600',color : '#252525'}}>{libarary.title}</Text>
                            </View>
                            <View style={{padding : 15}}>
                                <Text style={{fontSize : 16}}>{libarary.description}</Text>
                            </View>
                        </View>
                    )
                else
                    return(
                        <View key={libarary.id}>
                            <TouchableOpacity onPress={()=>{this.props.store.selectedList(libarary.id)}} style={{borderColor : '#aaa',borderWidth : 1,padding : 15,backgroundColor : '#ddd'}}>
                                <Text style={{fontSize : 18,fontWeight : '600',color : '#252525'}}>{libarary.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )    
            })}
        </View>
    );
  }
}