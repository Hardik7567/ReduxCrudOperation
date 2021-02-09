import React from 'react'
import { Vie} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTodo from '../Screen/AddTodo';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import UpdateScreen from '../Screen/UpdateScreen';
import Todoitem from '../Screen/Todoitem';
const Stack = createStackNavigator ();

const Navigator = props => {
 
    return(
        < NavigationContainer >
    <Stack.Navigator>
   
   <Stack.Screen name = "TODO" component = {AddTodo} />
   <Stack.Screen name = "Home" component = {Home} />
   <Stack.Screen name = "Profile " component = {Profile} />
   <Stack.Screen name = "UpdateScreen" component = {UpdateScreen}/>
   <Stack.Screen name = " Todoitem " component = {Todoitem} />

    </Stack.Navigator>
    </NavigationContainer>
    );

}



export default Navigator; 