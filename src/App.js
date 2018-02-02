import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import  {connect} from 'react-redux';

import './assets/css/reset.css';
import Login from './pagers/login';
import HasHeader from './pagers/hasHeader';
import Prompt from './componnets/prompt'
import {userVerify} from './actions';

class App extends Component {
    componentDidMount() {
        if (!this.props.user.uid) {
            this.props.dispatch(userVerify());
        }
    }

    render() {
        return (
          <div>
              <Route path="/" component={Prompt}/>

              <Switch>
                  <Route path="/login" component={Login}/>
                  <Route path="/" component={HasHeader}/>
              </Switch>
          </div>
        );
    }
}

export default connect( state => {
    return {
        user: state.user
    }
}, undefined, undefined, {pure: false})(App);
