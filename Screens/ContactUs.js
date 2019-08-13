import React from "react"
import {View,Text,TouchableWithoutFeedback} from "react-native"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default class ContactUs extends React.Component{
    render(){
        return(
            <View>
              <View style={{height:90}}>
      <View style={{backgroundColor:'#FA8072',height:30}}/>
   <View style={{height:60,flexDirection:'row',backgroundColor:'#FA8072',alignItems:'center',justifyContent:'space-between'}}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Home")}>
<Ionicons name="md-arrow-back" style={{fontSize:25,marginLeft:10}}/>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:20,fontWeight:'bold'}}>ContactUs</Text> 
      <Ionicons name="md-notifications" style={{fontSize:25,marginRight:7}} />
      </View>
      </View>
               <View style={{justifyContent:'center',height:'50%',alignItems:"center"}}>
                   <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>
                       Email 
                   </Text>
                   <Text style={{fontSize:20,color:'black',marginTop:5}}>
                       sharmatushar982@gmail.com
                          </Text>
                          <View  style={{borderBottomWidth:1,width:'100%',marginTop:30}}/> 
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold',marginTop:30}}>
                       Report Errors and problems 
                   </Text>
                   <Text style={{fontSize:20,color:'black',marginTop:5}}>
                       naukrialerts.in/support
                          </Text>
                   </View>
            </View>
        )
    }
}