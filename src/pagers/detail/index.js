import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../assets/css/item.css';
import Gallery from './gallery';
import Banner from './banner';
import {itemUpdate} from '../../actions/index';

class Detail extends Component {

    componentWillMount() {
        if (!this.props.items.length) {
           this.props.dispatch(itemUpdate());
        }
    }

    render() {
        var id = this.props.match.params.id;
        var items = this.props.items;
        var current = items.find( item =>item.id == id);
        var parent = items.find( item => {
            if (item.id == current.pid) {
                item.children = items.filter( child => child.pid == item.id)
                return item;
            }
        });

        return (
            <div className="store-content item">
                <div className="item-box">
                    <Gallery current={current}/>
                    <Banner id={id} current={current} parent={parent}/>
                </div>
            </div>
        );
    }
}

export default connect( state => {
    return {
        items: state.items
    };
})(Detail);
