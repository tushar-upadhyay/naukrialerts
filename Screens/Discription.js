import React from "react"
import {View,Text,TouchableWithoutFeedback,Linking} from "react-native"
export default class Discription extends React.Component{
    render(){
        var {discription,title,jobUrl}  = this.props.navigation.state.params 
       return(
        <View style={{flex:1,alignItems:'center',backgroundColor:'#F0FFF0'}}> 
           <View style={{borderWidth:1,height:360,width:300,marginTop:100}}> 
          
           <View style={{borderBottomWidth:1,width:'100%',height:80,justifyContent:'center',alignItems:'center'}} >
           <Text style={{fontSize:20,fontWeight:'bold'}}>{title}</Text>
               </View>
           <View style={{flexDirection:'row',justifyContent:'space-evenly',height:280}}>
              <View style={{width:'49%',height:280,marginTop:30}}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>
                  Total Vacancies
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold'}}>
                  Qualification
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold'}}>
                  Date Added
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold'}}>
                  Last Date to apply
              </Text>
              </View>
           <View style={{borderWidth:1,borderBottomWidth:0,width:0,height:279}} />
           <View style={{width:'49%',height:280,marginTop:30}}>
           <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>
                  {discription.vacancies}
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>
                {discription.qualification}
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>
                {discription.startdate}
              </Text>
              <View style={{borderBottomWidth:1,marginVertical:20}} />
              <Text style={{fontSize:18,fontWeight:'bold',alignSelf:'center'}}>
                {discription.enddate}
              </Text>
              </View>
              </View>
            </View>
            <View style={{marginTop:20,backgroundColor:'#00b5ec',width:150,borderRadius:20,height:50,justifyContent:'center'}}>
     <TouchableWithoutFeedback style={{alignItems:'center'}} onPress={()=>Linking.openURL(jobUrl)} >
    
     <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>
     Apply Now
     </Text>
     </TouchableWithoutFeedback>
            </View>
            </View>
        )
    }
}
