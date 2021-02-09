import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { useSelector } from 'react-redux'



const Profile = (props) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const enterEmail = (e) => {

        setemail(e);
    };
    const enterPassword = (e) => {
        setpassword(e);
    }
    const item = useSelector((state) => state.todo.data);

    const [data, setdata] = useState(item);

    console.log('profiledata', data);

    const todoItems = item.map(task => {
        return (
            <View key={task.Id}>
                <TextInput style={{ borderWidth: 1 }} value={email} onChangeText={enterEmail} />
                <TextInput style={{ borderWidth: 1, marginTop: 10 }} value={password} onChangeText={enterPassword} />


                <Button title="save"
                    onPress={() => {
                        if (email == task.Email && password == task.Password) {
                            Alert.alert("Title", 'succesful');
                        }
                        else {
                            Alert.alert("Title", 'not valid');
                        }
                    }} />
            </View>

        )

    });



    useEffect(() => {

        console.log('use effaect called')
        console.log('profile', item);

    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1 }} >
            {todoItems}




        </View>
    )

}

export default Profile;