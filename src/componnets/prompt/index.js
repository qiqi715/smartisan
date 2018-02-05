import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../assets/css/prompt.css';
import {promptUpdate} from '../../actions';

class Prompt extends Component {
    /*确定提示*/
    toSure() {
        this.props.dispatch(promptUpdate({
                tip: "",
                show: false
        }));
    }

    render() {
        return (
            <div id="prompt">
                <div className="module-dialog-layer"
                     style={{display: this.props.show ? "block" :"none"}}></div>
                <div className="clear module-dialog module-dialog-confirm module-dialog-show"
                     style={{display: this.props.show ? "block" :"none",
                            opacity: 1}}>
                    <div className="dialog-panel">
                        <div className="topbar">
                            <div className="dialog-tit clear">
                                <h4 className="js-dialog-title">{this.props.title}</h4>
                            </div>
                            <span className="dialog-close png"
                                  onClick={this.toSure.bind(this)}></span>
                        </div>
                        <div className="dialog-con js-dialog-container">
                            <div className="confirm-msg">{this.props.tip}</div>
                        </div>
                        <div className="dialog-btn-wrap clear">
                            <div className="blue-main-btn normal-main-btn js-dialog-done">
                                <a onClick={this.toSure.bind(this)}>确定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect( state => {
    return {
        ...state.prompt
    }
})(Prompt);