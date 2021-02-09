import React, { useEffect, useState ,useRef} from "react";
import { View, StyleSheet, TextInput , Button,Alert } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import {UpdateItem} from '../Redux/Action/TodoAction';

const UpdateScreen = props => {
  const item = useSelector(state => state.todo.data);
  const [email, setemail] = useState(" ");
  const [psw, setpsw] = useState(" ");

 const textRef=useRef(null);
 const pswRef = useRef(null);
 const dispatch = useDispatch();
   
  const forEmail = e => {
    setemail(e);
  };
  const forPassword = e => {
    setpsw(e);
  };
   
    const UpdateData = () =>{
       
        dispatch(UpdateItem({Email: email, Password: psw  }));
    } ;
   
useEffect(() => {
    console.log("update", item);
  
  }, []);

const todoItems = item.map((task) => {
    return(
        <View key={task.Id} >
        <TextInput
          placeholder="Enter Email"
          style={{ borderWidth: 1, marginTop: 10, height: 40 }}
         defaultValue={task.Email}
         onChangeText={(defaultValue)=>{setemail(defaultValue)}}
        
        />
        <TextInput
          placeholder="Enter password"
          style={{ borderWidth: 1, marginTop: 10, height: 40 }}
         defaultValue={task.Password}
         onChangeText={(defaultValue)=>{setpsw(defaultValue)}}
         
        />
        <Button title="Update" onPress={UpdateData}   />


      </View>
    );


});
       
   
  
  return (
  <View>
       {todoItems}
  </View>
  );
};

const styles = StyleSheet.create({});

export default UpdateScreen;
