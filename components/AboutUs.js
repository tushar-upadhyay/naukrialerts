import React from "react"
import {View,Text,TouchableWithoutFeedback} from "react-native"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default class AboutUs extends React.Component{
  render(){
    return (
      <View style={{flex:1}}>
     <View style={{height:90}}>
      <View style={{backgroundColor:'#FA8072',height:30}}/>
   <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between'}}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Home")}>
<Ionicons name="md-arrow-back" style={{fontSize:25,marginLeft:10}}/>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:20,fontWeight:'bold'}}>About Us</Text> 
      <Ionicons name="md-notifications" style={{fontSize:25,marginRight:7}} />
      </View>
      </View>
      <View style={{flex:1,alignItems:"center",marginTop:20}}>
        
      <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>
      Hey! Thanks for downloading our App    
         </Text>
         <View  style={{borderBottomWidth:1,width:'100%',marginTop:10}}/> 
  
         <Text style={{color:'red',fontSize:21,fontWeight:'bold',marginTop:10}}>Our Aim</Text>
         <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginHorizontal:10,marginTop:15}}>
     We created this app to help peoples who are finding jobs and are wasting their precious time in finding vacancies in google search.. we do exactly same thing for you and brings you vacancies from all over the india in your language currently hindi and english is supported
     but we plans to add other languages also in future release of the app  
         </Text>
         <View  style={{borderBottomWidth:1,width:'100%',marginTop:10}}/> 
  
         <Text style={{color:'red',fontSize:21,fontWeight:'bold',marginTop:10}}>A small Note</Text>
         <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginHorizontal:10,marginTop:15}}>
   All the information on this app is gathered by the help of internet . We work hard for finding vacancies
         </Text>
      </View>
      </View>
    )
  } 
}