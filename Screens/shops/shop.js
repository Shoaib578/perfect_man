import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Shop extends React.Component {
    render(){
        return(
            <TouchableOpacity style={{marginLeft:20}}>
            <Image source={require('../../Assets/images/burger_store.jpg')} style={{width:180,height:120,borderRadius:10}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'white'}}>Burger</Text>
            <Text style={{color:'white'}}>20-25min</Text>

            </View>
        </TouchableOpacity>
        )
    }
}
