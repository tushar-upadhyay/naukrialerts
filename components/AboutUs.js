import React from "react"
import {View,Text,TouchableWithoutFeedback} from "react-native"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default class AboutUs extends React.Component{
  render(){
    return (
      <View>
     <View style={{height:90}}>
      <View style={{backgroundColor:'#FA8072',height:30}}/>
   <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between'}}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Home")}>
<Ionicons name="md-arrow-back" style={{fontSize:25,marginLeft:10}}/>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:20,fontWeight:'bold'}}>NaukriAlerts.in</Text>
      <Ionicons name="md-notifications" style={{fontSize:25,marginRight:7}} />
      </View>
      </View>
      </View>
    )
  }
}