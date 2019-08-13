import React from "react"
import {View,Dimensions} from "react-native"
var {width} = Dimensions.get("window")
import Post from "./post"
export default class HomeScreen extends React.Component{

  render(){
    return (
        <View style={{flex:1,width:width}}>
        
  <Post navigation = {this.props.navigation} collections ={"SSC"}/>
  </View>
    )
  }
}