import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../assets/css/login.css';
import {userLogin} from '../../actions';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            code: 0,
            message: ""
        };
    }

    /*登录*/
    toLogin(e) {
        e.preventDefault();

        this.props.dispatch(userLogin(this.refs.username.value, this.refs.password.value))
            .then( res => {
                this.setState({
                    code: res.code,
                    message: res.code ? res.data : "登录成功"
                })

                if (!res.code) {
                    setTimeout( () => {
                        this.props.history.push('/');
                    }, 1000)
                }
            })
    }

    render() {
        return (
            <div id="login">
                <div className="title">
                    <h4>使用 Smartisan ID 登录官网</h4>
                </div>
                <form className="form">
                    <ul>
                        <li>
                            <input ref="username" type="text" placeholder="手机号/邮箱" />
                        </li>
                        <li>
                            <input ref="password" type="password" placeholder="密码"/>
                        </li>
                    </ul>
                    <button className="btn"
                            onClick={this.toLogin.bind(this)}
                    >登陆</button>
                    <p style={{color: (this.state.code ? "red" : "green")}}
                    >{this.state.message}</p>
                </form>
            </div>
        );
    }
}

export default connect( state => {
    return {
        user: state.user
    }
})(Login);