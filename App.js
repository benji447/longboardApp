import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, } from 'react-native'; 
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';


// You can import from local files
import Password from './components/Password';
import Username from './components/Username';
import Search from './components/Search';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);
function login ({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Longboard Spots  
      </Text>
      <Card>
        <Username />
        <Password />
      </Card>
      <Separator />
      <Button
        title="Login"
        onPress={() =>  navigation.navigate("Home")} 
      />
    </View>
  );
}

function homeScreen({ navigation }) {  
        return (  
            <View style={styles.container}>  
              <Button
                title="Search"
                onPress={() =>  navigation.navigate("Search")} 
                />
              <Button
                title="Add"
                onPress={() =>  navigation.navigate("Add")} 
                />
            </View>  
    );  
  }  
  function search({ navigation }) {  
        return (  
            <View style={styles.container}>  
              <Search />
            </View>  
    );  
  }  
  function add({ navigation }) {  
        return (  
            <View style={styles.container}>  
              <Card>
                <Title />
                <Long />
                <Lat />
              </Card>
              <Button
                title="Submit"
                onPress={() =>  navigation.navigate("Home")} 
                />
            </View>  
    );  
  }  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },


});
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bruh">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Search" component={search} />
        <Stack.Screen name="Add" component={add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
