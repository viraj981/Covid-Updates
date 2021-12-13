import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet , TextInput} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import {getData} from '../actions/HomeAction';
import { ThemeProvider } from '@react-navigation/native';

class HomeScreen extends Component {
  state = {
    searchValue : '',
    filteredArray : []
  }
  componentDidMount() {
    this.props.getData(); 
    this.setState({filteredArray : this.props.data})
    this.filterList('')
    
  }
  filterList(search){
      let text = search.toLowerCase()
      let trucks = this.props.data
      let filteredName = trucks.filter((item) => {
        return item.state.toLowerCase().match(text)
      
      })
      console.log(filteredName , 'filter')
      this.setState({filteredArray: filteredName})
      if (!text || text === '') {
        this.setState({
          data: this.props.data
        })
      } else if (!Array.isArray(filteredName) && !filteredName.length) {
        // set no data flag to true so as to render flatlist conditionally
        this.setState({
          noData: true
        })
      } else if (Array.isArray(filteredName)) {
        this.setState({
          noData: false,
          data: filteredName
        })
      }
    }

  
  
  render() {
    return (
      <View style={styles.surface}>
        <View style={styles.header}>
          <Text style={styles.text}>Covid-Updates</Text>
          <TextInput 
          style={styles.search}
          placeholder='Search'
           value= {this.state.searchValue}
          onChangeText={searchValue => {
            this.setState({searchValue})
            this.filterList(searchValue)
          }
        }
 
          />
        </View>
        <FlatList
          data={this.state.filteredArray}
          renderItem = {({item}) => (
             <Card
              confirmed={item.confirmed}
              active={item.active}
              recovered={item.recovered}
              deaths={item.deaths}
              stateName={item.state}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    backgroundColor: 'darkgrey',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  search:{
    textAlign:'center',
    fontSize:20,
    backgroundColor:'white',
    borderRadius: 20,
    marginLeft:20,
    marginRight:20,
    marginBottom: 20,
  }
});

function mapStateToProps(state) {
  return {
    data: state.home.data,
  };
}

export default connect(mapStateToProps, {getData})(HomeScreen);
