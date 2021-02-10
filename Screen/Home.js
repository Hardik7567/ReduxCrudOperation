import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, TouchableHighlight, TextInput, Alert, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DeleteItem } from '../Redux/Action/TodoAction';
import todo from '../Redux/Reducers/TodoReducer';


const Home = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const item = useSelector((state) => state.todo.data);
  // const item = route.params.data

  const [data, setdata] = useState(item);
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // do something
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  //  showarryItem = (item) =>{

  //     Alert.alert(item);
  //  }
  useEffect(() => {
  }, [data])
  const deleteHandler = (id) => {
    dispatch(DeleteItem(id))
    setdata(item)
  }
  const todoItems = item.map((task) => {
    return (
      <View >
        <View style={{ justifyContent: 'space-around', marginTop: 5 }} >
          <TouchableHighlight onPress={() => { navigation.navigate('UpdateScreen', { userId: task.Id }) }} >
            <Text key={task.Id} > {'Email : '} {task.Email} {" "} {'Password : '}{task.Password} </Text>
          </TouchableHighlight>
          <Button title="delete" onPress={() => {
            deleteHandler(task.Id)
          }} />

        </View>

      </View>
    );


  });
  useEffect(() => {
  }, [todoItems, data])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
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

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }} >
        <Button title="press" onPress={() => { navigation.navigate("Profile ") }} />
        <Button title="update" onPress={() => { navigation.navigate('UpdateScreen') }} />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({


});

export default Home;