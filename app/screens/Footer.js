import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StackNavigator, TabNavigator} from 'react-navigation';

export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>4</Text></Badge>
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>
            <Button vertical onPress={() => navigate('Cart')}>
              <Text style={{color: 'black'}}>Check Out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

class Cart extends React.Component {

  render() {
    let cartPic = require('../images/cart.png');
    return (
      <View>
        <Text>Here are the items in your cart!</Text>
        <Image source={cartPic} style={{width: 193, height: 110}}/>
          <Button
            onPress={() => navigate('CheckOut')}
            title="Check Out"
          />
      </View>
    );
  }
}
