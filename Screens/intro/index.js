import React from 'react';
import { StyleSheet } from 'react-native';
import {View,Text,Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
    {
      key: 1,
      title: 'Who Are We?',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      image: require('../../Assets/images/firstintro.png'),
      backgroundColor: 'black',
    },
    {
      key: 2,
      title: 'What We Offer?',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      image: require('../../Assets/images/secondintro.png'),
      backgroundColor: 'black',
    },
    {
      key: 3,
      title: 'How To Use?',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      image: require('../../Assets/images/thirdintro.png'),
      backgroundColor: 'black',
    }
  ];
   

export default class Intro extends React.Component {

    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <View>
            <Image source={require('../../Assets/images/pfm.png')} style={{position: 'absolute',zIndex:2,width:150,height:150,alignSelf: 'center',bottom:140}}/>

            <Image source={item.image} style={{width:250,height:250}}/>
                
            </View>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      _onDone = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'signin'}]
        });
      }
    render(){
        return  <AppIntroSlider dotStyle={{backgroundColor:'white'}} activeDotStyle={{backgroundColor:'orange'}} renderItem={this._renderItem} data={slides} onDone={this._onDone}/>
    }
}

const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'black',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
        color:"white",
        fontWeight:'bold',
        fontSize:20,
        marginTop:20
    },
    slide:{
        backgroundColor:'black',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        color:'white',
        marginTop:10,
        width:'80%'
    }
  });