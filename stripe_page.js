/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';
stripe.init({
  // test key
  publishableKey: 'pk_test_HjN8L9E5xZW12lWT4VBzKSWl',
});
const theme = {
  primaryBackgroundColor: 'white',
  secondaryBackgroundColor: 'dimgrey',
  primaryForegroundColor: 'red',
  secondaryForegroundColor: 'red',
  accentColor: 'red',
  errorColor: 'dimgrey'
};

class NewCardPage extends Component {
  componentDidMount() {

    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'full',
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return(
      <View />
    );
  }
}

export default NewCardPage;
