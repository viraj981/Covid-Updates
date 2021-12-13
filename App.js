import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import reducers from './src/reducers/Index'



class App extends Component {
  render() {
    const store = createStore(reducers , {} , applyMiddleware(ReduxThunk) )
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
