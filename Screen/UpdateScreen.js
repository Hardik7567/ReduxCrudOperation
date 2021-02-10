import React, { useEffect, useState, useRef } from "react";
import { useCallback } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { UpdateItem } from '../Redux/Action/TodoAction';

const UpdateScreen = props => {
  const userId = props.route.params.userId

  const item = useSelector(state => state.todo.data);
  const singleItem = item.find(data => data.Id === userId)
  const [email, setemail] = useState(singleItem.Email);
  const [psw, setpsw] = useState(singleItem.Password);

  const textRef = useRef(null);
  const pswRef = useRef(null);
  const dispatch = useDispatch();
  const forEmail = e => {
    setemail(e);
  };
  const forPassword = e => {
    setpsw(e);
  };

  const UpdateData = () => {
    const data = {
      Email: email, Password: psw
    }
    dispatch(UpdateItem(data, userId));
    props.navigation.navigate('Home', { data: item })
  };
  // useEffect(() => {
  //   console.log("update", item);

  // }, []);

  // const todoItems = item.map((task) => {
  //   return (
  //     <View key={singleItem.Id} >
  //       <TextInput
  //         placeholder="Enter Email"
  //         style={{ borderWidth: 1, marginTop: 10, height: 40 }}
  //         defaultValue={singleItem.Email}
  //         onChangeText={(defaultValue) => { setemail(defaultValue) }}

  //       />
  //       <TextInput
  //         placeholder="Enter password"
  //         style={{ borderWidth: 1, marginTop: 10, height: 40 }}
  //         defaultValue={task.Password}
  //         onChangeText={(defaultValue) => { setpsw(defaultValue) }}

  //       />
  //       <Button title="Update" onPress={UpdateData} />


  //     </View>
  //   );


  // });



  return (
    <View key={singleItem.Id} >
      <TextInput
        placeholder="Enter Email"
        style={{ borderWidth: 1, marginTop: 10, height: 40 }}
        defaultValue={email}
        onChangeText={(defaultValue) => { setemail(defaultValue) }}

      />
      <TextInput
        placeholder="Enter password"
        style={{ borderWidth: 1, marginTop: 10, height: 40 }}
        defaultValue={psw}
        onChangeText={(defaultValue) => { setpsw(defaultValue) }}

      />
      <Button title="Update" onPress={UpdateData} />


    </View>
  );
};

const styles = StyleSheet.create({});

export default UpdateScreen;
