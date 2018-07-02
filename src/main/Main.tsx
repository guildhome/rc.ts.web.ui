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
import { connect } from 'react-redux'

// example of functional React component
// which is just a function (representing render())
// as opposed to a class extending React.Component
const Main = (props: any) => {
  return (
    <HashRouter>
      <div className="Main">
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h1 className="Main-title">Guild Home</h1>
        </header>
        <ul className="headers">
            {/* This tag demonstrates accessing the global redux state */}
            <Welcome user={props.user} />
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

const Welcome = (props: any) => {
  return props.user ? <li>Welcome, {props.user.handle}:</li> : null
}

const mapStateToProps = (state: any, props: any) => ({
  user: state.user
})

export default connect(
  mapStateToProps
)(Main)