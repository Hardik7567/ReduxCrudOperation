import React, {useState} from 'react'
import { View,StyleSheet,Text,Button,TouchableHighlight,TextInput,Alert,FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {DeleteItem} from '../Redux/Action/TodoAction';


const Home = props => {

    console.log('item' ,props);
    const dispatch = useDispatch();
    const item = useSelector((state) => state.todo.data);
    const [data,setdata] = useState(item);
   console.log('Home',data);
   
    //  showarryItem = (item) =>{

    //     Alert.alert(item);
    //  }

   const todoItems = item.map((task) => {
              return(
              <View >   
                  <View style = {{ justifyContent:'space-around',marginTop:5}} >
                <TouchableHighlight onPress =  {() =>{props.navigation.navigate('UpdateScreen')} } >
                <Text key={task.Id} > {'Email : '} {task.Email} {" "} {'Password : '}{ task.Password} </Text>
                </TouchableHighlight>
                  <Button  title="delete" onPress={()=>dispatch(DeleteItem(task.Id))}/>
             
                   </View> 
                   
              </View>
              );
          
      
  });

  
 
return(
    <View style = {{ flex:1,backgroundColor:'#fff'}} >
     {todoItems}
     {/* <FlatList
            keyExtractor={(item,index)=>(item.Id)}  
            data={data}
            renderItem={itemdata=>
               <View>
                <TouchableHighlight onPress = {()=>{props.navigation.navigate('UpdateScreen') }} >
                <Text key={itemdata.item.Id} > {'Email : '} {itemdata.item.Email} {" "} {'Password : '}{ itemdata.item.Password} </Text>
                </TouchableHighlight>
                <Button  title="delete" onPress={()=>dispatch(DeleteItem(itemdata.item.Id))}/>
               </View>
          
            }
             /> */}
  
     <View style = {{marginTop:10,flexDirection:'row',justifyContent :'space-around'}} >
     <Button  title="press" onPress={ () => {props.navigation.navigate("Profile ")}} />
     <Button  title="update" onPress = {()=>{props.navigation.navigate('UpdateScreen') }} />
     </View>
    </View>
);

}

const styles = StyleSheet.create({
    

});

export default Home;