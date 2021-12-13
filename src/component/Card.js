import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Card extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.stateName}>{this.props.stateName}</Text>
        <View style={styles.miniView}>
          <View>
            <Text style={[styles.confirmed, styles.text]}>Active</Text>
            <Text style={[styles.confirmed, styles.num]}>{this.props.active}</Text>
          </View>
          <View>
            <Text style={[styles.recovered, styles.text]}>Recovered</Text>
            <Text style={[styles.recovered, styles.num]}>{this.props.recovered}</Text>
          </View>
          <View>
            <Text style={[styles.death, styles.text]}>Deaths</Text>
            <Text style={[styles.death, styles.num]}>{this.props.deaths}</Text>
          </View>
        </View>
        <View style={styles.activeCon}>
          <Text style={styles.activeText}>
            Confirmed Cases: {this.props.confirmed}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  stateName: {
    fontSize: 26,
    textAlign: 'center',
    color: 'purple',
    marginTop: 15,
  },
  miniView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  confirmed: {
    color: 'red',
  },
  recovered: {
    color: 'green',
  },
  death: {
    color: 'red',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  num: {
    fontSize: 26,
    textAlign: 'center',
  },
  activeCon: {
    marginBottom: 15
  },
  activeText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 22,
  },

});



export default Card;