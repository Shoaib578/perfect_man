import React from 'react'
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shop from './shop';
export default class Shops extends React.Component {
    render(){
        return(
           
            <View style={styles.container}>
                
                <View style={styles.innerContainer}>
                <ScrollView>
                {/* Desire Location starts*/}
                <View style={{flexDirection: 'row',alignSelf:'center',borderWidth:1,borderColor:"#DBDBDB",backgroundColor:'white',borderRadius:35,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,}}>
                <Ionicons name="location-outline" color="black" size={20} style={styles.phoneImageStyle}/>
                <Picker         
                style={{color:'black',flex:1}}
                mode="dropdown">
                <Picker.Item label="Desired Location" value='' />

                <Picker.Item label="Pakistan" value={1} />
                <Picker.Item label="India" value={0} />
                 </Picker>

                 </View>


                {/* Desire Location end*/}


                <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:20}}>Nearby Resturants</Text>

                <ScrollView style={{marginTop:20}} horizontal={true}>
                   


                   <Shop />


                   <Shop />
                   <Shop />
                   <Shop />
                   <Shop />
                   <Shop />


                </ScrollView>




                <Text style={{marginLeft:20,fontSize:18,fontWeight:'bold',color:'white',marginTop:30}}>Nearby GiftShops</Text>

                    <ScrollView style={{marginTop:20}} horizontal={true}>
                    


                    <Shop />


                    <Shop />
                    <Shop />
                    <Shop />
                    <Shop />
                    <Shop />


                    </ScrollView>

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
    phoneImageStyle:{
        padding: 0,
        marginLeft:7,  
    
      
        alignItems: 'center',
        margin:12,
        marginLeft:20
      }
    
  
})