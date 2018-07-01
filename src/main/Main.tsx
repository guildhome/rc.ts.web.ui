import * as React from 'react';
import './Main.css';
import Login from '../login/Login';
import PostList from '../post/PostList';
import logo from '../logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div className="Main">
          <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <h1 className="Main-title">Guild Home</h1>
          </header>
          <ul className="headers">
              <li><NavLink to="/">Login</NavLink></li>
              <li><NavLink to="/post">Post</NavLink></li>
          </ul>
            <div className="content">
              <Route exact path="/" component={Login}/>
              <Route path="/post" component={PostList}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
