import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Splash </Text>
        <Button> Login </Button>
      </View>
    );
  }
}

export default Splash;
