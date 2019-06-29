import React from "react"
import {View,Text,Dimensions,Image,TouchableWithoutFeedback,ScrollView,ActivityIndicator,FlatList,RefreshControl,Linking} from "react-native"
import AsyncStorage from '@react-native-community/async-storage';


var {height,width} = Dimensions.get("window")

export default class Post extends React.Component{
constructor(props){
  super(props)
  this.state = {language:null,data:null,refreshed:false }
  
}
async componentDidMount(){
  var language = await AsyncStorage.getItem('Language')
 await  this.setState({language:language})
  await this.getPosts(this.state.language)
  
}
 getPosts=async  (language)=>{
   if(language==="English"){
     language = ""
   }

 var res = await fetch(`https://www.naukrialerts.in/api/posts?collections=${String(this.props.collections)+language}`);
 
 res =   await res.json();
 await this.setState({data:res,refreshed:false})
 
  } 
  renderItem = ({item})=>{
  return (  
 <View style={{flex:1,flexDirection:'row',borderColor:'grey',borderWidth:1,
    borderRadius:8,width:width-10,marginTop:10,height:140,marginHorizontal:5,backgroundColor:'white',justifyContent:'flex-start'}}>
    <View style={{width:110,height:110,marginLeft:10,marginTop:5}}>
    <Image style={{height:undefined,width:undefined,flex:1,resizeMode:'stretch'}} source={{uri:item.imageUrl}} />
    </View>
    <View style={{marginLeft:25,width:250,marginRight:5}}>
    <View style={{height:94}}>  
    <Text style={{color:"red",fontWeight:'bold',fontSize:19}}>{item.title}</Text>
    <View style={{width:240}}>
    <Text style={{fontWeight:'bold',fontSize:16}}>{item.body}</Text>
    </View>
   
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',width:250}}>
      <View style={{marginBottom:4}}>
      <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.jobUrl)}>
      <Text style={{color:'blue',fontWeight:'bold',fontSize:18}}>Apply Now</Text>
      </TouchableWithoutFeedback>
      </View>
    <View style={{marginBottom:4,backgroundColor:'#00b5ec',borderRadius:10,width:100,height:30,justifyContent:'center',alignItems:'center'}}>
    <TouchableWithoutFeedback onPress ={()=>this.props.navigation.navigate("Discription",{
         discription:item.discription,
         title:item.title,
         jobUrl:item.jobUrl
       })}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Discription</Text>
      </TouchableWithoutFeedback> 
    </View>
       
      </View>
    </View>
    </View>    
  )
  } 
  render(){
    if(this.state.data){
    return ( 
      
      <View style={{flex:1,backgroundColor:'#F0FFFF'}}>
     
      <ScrollView 
      refreshControl = { 
        <RefreshControl 
        refreshing ={this.state.refreshed}
        onRefresh = {()=>{
         
          this.setState({refreshed:true})
          this.getPosts(this.state.language)}}
        
        /> }>
      <View style={{marginTop:20}}>
     <FlatList
  data={this.state.data}
  renderItem={this.renderItem}
/>
  </View>   
 </ScrollView>
</View>

    
    )
  }
  return(
    <View>
    <View style={{backgroundColor:'black',height:30}} />
    <ActivityIndicator size="large"/>
    </View>
  )
  }
}