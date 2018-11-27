import React, { Component } from 'react';
//路由
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

//组件
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing"
import Footer from "./components/layout/Footer"

import Login from './components/auth/Login'
import Register from './components/auth/Register'



//redux
//import { createStore, applyMiddleware } from "redux";

//provider在跟组件外面包了一层，APP的所有子组件就默认可以拿到state
import { Provider } from 'react-redux';

//引入store
import store from './store'
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import jwt_decode from 'jwt-decode'
// const store=createStore("reducer","initialState","Middleware")
// const store = createStore(() => [], {}, applyMiddleware())


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)

  //解析token
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="contaier">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
