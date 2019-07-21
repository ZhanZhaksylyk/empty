import React, { Component } from 'react';
import { AppRegistry ,View ,Text,StyleSheet } from 'react-native';
import Chart from './Chart.js';

class ChartField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chart width={this.props.width} img={this.props.img}/>
        <Text>{this.props.width}%</Text>
      </View>
    );
  }
};
const styles=StyleSheet.create({
	container:{
		display:"flex",
		flexDirection:"row",
		justifyContent:"space-between"
	}
})

AppRegistry.registerComponent('AwesomeProject', () => ChartField);

export default ChartField;