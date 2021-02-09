import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Alert, Animated, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/Action/TodoAction";
import Home from '../Screen/Home';
const AddTodo = (props) => {
  const dispatch = useDispatch();

  const [addItem, setAddItem] = useState(" ");

  const [addpsw, setpsw] = useState(" ");

  const emailfocus = useRef(null)
  //for first input text
  const forInputText = e => {
    setAddItem(e);
  };

  // for second input text

  const forPassword = e => {
    setpsw(e);
  };

  useEffect(() => {
    emailfocus.current.focus()

  }, [])

  const AddData = () => {


    if (addItem.length < 4) {
      emailfocus.current.focus()
      Alert.alert('alert', 'email must be greater than 4');
      return;
    }
    else if (addpsw.length < 6) {
      Alert.alert('alert', 'password must be greate than 6');
      return;
    }


    dispatch(AddItem({ Email: addItem, Password: addpsw, Id: Math.random() }))


    { props.navigation.navigate(Home) }




  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.for_container}>
        <View style={styles.forSecondView}>


        </View>
        <View style={styles.cardView}>
          <TextInput
            ref={emailfocus}
            style={styles.for_input}
            placeholder="email"
            onChangeText={forInputText}
          />

          <TextInput
            style={styles.for_input}
            placeholder="Password"
            onChangeText={forPassword}
            secureTextEntry={true}
            keyboardType='number-pad'

          />

          <Button title="ADDITEM" onPress={AddData} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  for_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: 'dodgerblue'
  },

  cardView: {

    flex: 4,

    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  forSecondView: {
    flex: 2,

  }
  ,
  for_input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#FFF'
  }
});

export default AddTodo;
