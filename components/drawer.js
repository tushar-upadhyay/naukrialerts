import React from "react"
import {View,Text,ScrollView,TouchableWithoutFeedback} from "react-native"
import AsyncStorage from '@react-native-community/async-storage';

import {DrawerItems} from "react-navigation"
export default class DrawerComponent extends React.Component{
  constructor(props){
    super(props)
  }
  changeLanguage =async()=>{
    this.props.navigation.navigate("Menu")
   await AsyncStorage.clear()
  }
  render(){
    return(
      <View style={{backgroundColor:'azure',flex:1}}>
      <View style={{height:30,backgroundColor:'#FA8072',justifyContent:'center'}} />
      <View style={{height:70,marginTop:10,justifyContent:'center'}}>
      <TouchableWithoutFeedback onPress={async()=>{
        this.props.navigation.navigate("Menu")
        await AsyncStorage.clear()
        }}>
      <View style={{borderRadius:20,backgroundColor:'#00b5ec',width:160,alignSelf:'center',height:40,justifyContent:'center'}}>
      <Text style={{alignSelf:'center',color:'white',fontWeight:'bold'}}> 
     Change Language
      </Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
      <ScrollView>
<DrawerItems {...this.props} />
</ScrollView>
      </View>
    )
  }
}