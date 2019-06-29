import React from "react"
import {Text,View,TouchableHighlight} from "react-native"

export default class Header extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return(
      <View style={{height:90}}>
      <View style={{backgroundColor:'#FA8072',height:30}}/>
   <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between'}}>
<TouchableHighlight onPress={()=>this.props.navigation.openDrawer()}>
     
      </TouchableHighlight>
      <Text style={{fontSize:20,fontWeight:'bold'}}>NaukriAlerts.in</Text>
  
      </View>
      </View>
    )
}
}