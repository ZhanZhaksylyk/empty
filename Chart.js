import React, { Component } from 'react';
import { AppRegistry, View,Image,StyleSheet,Text } from 'react-native';

class Chart extends Component {
  render() {
    return (
      <View style={[styles.chart, {width:this.props.width+"%"}]}>
        <Image source={this.props.img} style={styles.image}/>
      </View>
    );
  }
};
const styles=StyleSheet.create({
  chart:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"flex-end",
    backgroundColor:"red",
    height:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  image:{
  	width:30,
  	height:20
  }
});

AppRegistry.registerComponent('AwesomeProject', () => Chart);


export default Chart;