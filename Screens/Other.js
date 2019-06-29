import React from "react"
import {View} from "react-native"

import Post from "./post"

export default class HomeScreen extends React.Component{
  componentDidMount(){
    console.log(this.props.navigation)
  }
render(){
  return (
    <View style={{flex:1}}> 
    <Post navigation={this.props.navigation} collections={"Others"}/>
    </View>
  )
}
}