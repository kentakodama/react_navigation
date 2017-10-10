import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import FooterTabsBadge from './screens/Footer.js';
import DrinksScreen from './screens/DrinkScreen.js';
import FoodScreen from './screens/FoodScreen.js'



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SnackAcademy',
     headerStyle: { backgroundColor: 'red' },
     headerTitleStyle: { color: 'white' }
  };
  render() {

    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome to the menu!</Text>
          <View>
            <Button
              onPress={() => navigate('Drinks')}
              title="Drinks"
            />
            <Button
              onPress={() => navigate('Food')}
              title="Food"
            />
        </View>
      </View>
    );
  }
}



class Cart extends React.Component {

  static navigationOptions = {
    title: 'Cart',
    headerBackTitle: 'back',
    headerBackTitleStyle: {color: 'blue', fontSize: 40}
  };
  render() {

    const { goBack } = this.props.navigation;
    console.log(goBack);
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .05, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center'}}>Your Cart</Text>
        </View>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={{fontSize: 22, top: 50}}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}





class CheckOut extends React.Component {
  static navigationOptions = {
    title: 'CheckOut',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' }
  };
  render() {
    const { goBack } = this.props.navigation;
    console.log(goBack);
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{flex: .05, backgroundColor: 'orange', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center'}}>Your Cart</Text>
        </View>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={{fontSize: 22, top: 50}}>back to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Confirmation extends React.Component {
  static navigationOptions = {
    title: 'Confirmation',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' }
  };
  render() {
    let coffeePic = require('./images/coffee.jpg')
    return (
      <View>
        <Text>Thanks for ordering!</Text>
      </View>
    );
  }
}




//routes


const Menu = TabNavigator({
  Drinks: {
    screen: DrinksScreen
  },
  Food: {
    screen: FoodScreen
  }
},
{
  tabBarPosition: 'top',
  tabBarOptions: {
     activeTintColor: 'red',  // Color of tab when pressed
     inactiveTintColor: '#b5b5b5',
     labelStyle: {
        fontSize: 31,
      },
      backgroundColor: 'white'
   }
}
);




//if flexing, the way to change heights of header and footer is by changing the height of the component between them
class SimpleApp extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeaderBanner style={{flex: 1}}/>
        <View style={{backgroundColor: 'white', flex: 8}}>
          <Menu />
        </View>
        <Container style={{flex: 1}}>
            <TouchableOpacity badge vertical onPress={() => navigate('Cart')}>
              <Text style={{color: 'black'}}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity vertical onPress={() => navigate('CheckOut')}>
              <Text style={{color: 'black'}}>Check Out</Text>
            </TouchableOpacity>
        </Container>
      </View>
    );
  }
}

//this must be after simple app or wont work
const AppNavigator = StackNavigator(

  {
    Index: {
      screen: SimpleApp
    },
    Cart: {
      screen: Cart
    },
    CheckOut: {
      screen: CheckOut
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

  }
);


class HeaderBanner extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: 'red'}}>
          <Title style={{color: 'white', fontSize: 30,  justifyContent: 'center'}}>SnackAcademy</Title>
      </Header>
    );
  }
}


const ActionBar = StackNavigator({
  Cart: { screen: Cart },
  CheckOut: { screen: CheckOut }
});


export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
