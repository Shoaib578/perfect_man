import React from 'react'
import  {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'


export default class Products extends React.Component {
    render(){
        return(
            <View style={styles.ProductContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
               <Text style={{color:'blue',fontWeight:'bold'}}>Valilla Cup Candle</Text>
               
               <Image source={require('../../Assets/images/cup.png')} style={{width:60,height:60}}/>

            </View>
            <Text style={{color:'white',bottom:30,width:'75%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
           
            <Text style={{color:'white',bottom:20,fontWeight:'bold'}}>20 $</Text>

           </View>

        )
    }
}


const styles = StyleSheet.create({
    ProductContainer:{
        width:'100%',
        padding:10,
        alignSelf:'center',
        marginTop:20
    }
})