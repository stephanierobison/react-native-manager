import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC7eAKMYd23yKYtZGRdW6sGd6mgRsmEuHE",
      authDomain: "manager-ef24c.firebaseapp.com",
      databaseURL: "https://manager-ef24c.firebaseio.com",
      storageBucket: "manager-ef24c.appspot.com",
      messagingSenderId: "67323119525"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
};

export default App;
