import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { saveUser } from "../Redux/Action/LoginAction";
import Profile from "../Screen/Profile";

Login = props => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [data,fdata] = useState([]);

  const setemailValue = text => {
    setemail(text);
  };
  const setpasswordValue = text => {
    setpassword(text);
  };

  const senddata = () => {
    props.addToDataHandler(email, password);
   fdata(currentdata=>[...currentdata,{key:Math.random(),value:{email,password}}]);
  setemail('');
  setpassword('');
  };

  useEffect(() => {
    console.log("use effect ");
  }, []);

  return (
    <View style={styles.for_container}>
      <TextInput
        style={{ borderWidth: 1, width: 300, height: 40 }}
        placeholder="email"
        value={email}
        onChangeText={setemailValue}
      />
      <TextInput
        style={{ borderWidth: 1, marginTop: 10, width: 300, height: 40 }}
        placeholder="password"
        value={password}
        onChangeText={setpasswordValue}
      />

      <View>
        <Button
          title="save"
          onPress={senddata}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  for_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  data: state.username
});

const mapDispatchToProps = dispatch => {
  return {
    addToDataHandler: (email, password) => {
      dispatch({
        type: "SUBMIT",
        payload: {  email,  password }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
