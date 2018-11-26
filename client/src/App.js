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
import store  from './store'
// const store=createStore("reducer","initialState","Middleware")
// const store = createStore(() => [], {}, applyMiddleware())


class App extends Component {
  render() {
    return (
      <Provider stroe={store}>
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
