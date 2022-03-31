import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Product from '../product'


export default class ViewShop extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                
                <View style={styles.innerContainer}>
                   <Image source={require('../../Assets/images/shop.jpg')} style={styles.innerImage}/>

                   <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Text style={{color:'black'}}>Candles</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.categoryContainer}>
                        <Text style={{color:'black'}}>Decoration</Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={styles.categoryContainer}>
                        <Text style={{color:'black'}}>Perfumes</Text>
                    </TouchableOpacity>
                   </View>

                   <ScrollView >


                    
                   <Product />
                   <Product />

                   <Product />
                   <Product />
                   <Product />





                    <View style={{marginTop:100}}>

                    </View>


                    </ScrollView>

                </View>



            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#d6eef8'
    },
    innerContainer:{
        width:'100%',
      
        marginTop:'20%',
        borderColor:'black',
        borderWidth:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        backgroundColor:'black'
    },
    innerImage:{
        width:'100%',
        height:'20%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    categoriesContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:5,
        padding:10,
    },
    categoryContainer:{
        width:Dimensions.get('window').width*2/7,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d6eef8',
        borderRadius:15,
    },
  
})