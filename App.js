import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screen/Login";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import thunk from "redux-thunk";
import AddTodo from "./Screen/AddTodo";
import Navigator from './NAVIGATION/Navigator';
// import{createStore,applyMiddleware} from 'redux';
// import userLogin from './Redux/Reducers/LoginReducer';
import Profile from "./Screen/Profile";
import Home from './Screen/Home';

// const store=createStore(userLogin); gyuhguyhbub
//  console.log('store',store);
export default function App(props) {
  return (
    <Provider store={store}>
    <Navigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
