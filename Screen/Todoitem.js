import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const Todoitem = (props) => {

  return (
    <View>

    </View>
  );


}

const styles = StyleSheet.create({



});
function mapStateToProps(state) {
  console.log("list", state)
  return {

    task: state.data
  }
}

export default connect(mapStateToProps)(Todoitem);