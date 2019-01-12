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

import Dashboard from "./components/dashboard/Dashboard";



//redux
//import { createStore, applyMiddleware } from "redux";

//provider在跟组件外面包了一层，APP的所有子组件就默认可以拿到state
import { Provider } from 'react-redux';

//引入store
import store from './store'
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';
// const store=createStore("reducer","initialState","Middleware")
// const store = createStore(() => [], {}, applyMiddleware())


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)

  //解析token
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  //检测token是否过期

  //获取当前时间

  const currentTime = Date.now() //1000

  //判断当前是否大于token过期时间
  if (decode.exp < currentTime) {
    //过期
    store.dispatch(logoutUser())
    //TODO 清楚用户信息

    //页面跳转
    window.location.href = '/login'
  }
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
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
