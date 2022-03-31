import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Shop extends React.Component {
  
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewShop')} style={{marginLeft:20}}>
            <Image source={this.props.data.image} style={{width:180,height:120,borderRadius:10}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'white'}}>{this.props.data.title}</Text>
            <Text style={{color:'white'}}>20-25min</Text>

            </View>
        </TouchableOpacity>
        )
    }
}
