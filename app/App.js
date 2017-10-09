import React from 'react';
import { StyleSheet, Text, AppRegistry, ScrollView, View, Button, Image } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import FooterTabsBadgeExample from './screens/Footer.js'

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

//adding a new screen
class DrinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Drinks', //refers to name of displayed button
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' }
  };
  render() {
    let coffeePic = require('./images/coffee.jpg')
    return (
      <View style={{width: 193, height: 390}}>
        <Text>Some Drinks</Text>
        <View>
          <Image source={coffeePic} style={{width: 193, height: 110}}/>
        </View>
      </View>
    );
  }
}

class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'white' }
  };
  render() {
    let doritosPic = require('./images/doritos.jpg');
    return (
      <View style={{width: 193, height: 390}}>
        <Text>Some Food</Text>
        <Image source={doritosPic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

class Cart extends React.Component {

  render() {
    let doritosPic = require('./images/cart.png');
    return (
      <View>
        <Text>Here are the items in your cart!</Text>
        <Image source={doritosPic} style={{width: 193, height: 110}}/>
          <Button
            onPress={() => navigate('CheckOut')}
            title="Check Out"
          />
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
    let coffeePic = require('./images/coffee.jpg')
    return (
      <View>
        <Text>Check Out</Text>
        <View>
          <Image source={coffeePic} style={{width: 193, height: 110}}/>
        </View>
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
  tabBarPosition: 'top'
}
);

class SimpleApp extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBanner style={{height: 30}} />
        <ScrollView>
          <View>
            <Menu style={{height: 390}} />
          </View>
        </ScrollView>
        <FooterTabsBadgeExample/>
      </View>
    );
  }
}

  // <ActionBar style={{height: 90}} />


class HeaderBanner extends React.Component {
  render() {
    return (
      <Container style={{ height: 80}}>
        <Header style={{ backgroundColor: 'red', height: 80}}>
          <Body>
            <Title style={{color: 'white', fontSize: 30}}>SnackAcademy</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}


const ActionBar = StackNavigator({
  Cart: { screen: Cart },
  CheckOut: { screen: CheckOut }
});


export default class App extends React.Component {
  render() {
    return <SimpleApp />;
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
