import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../../assets/css/goodsList.css';
import Item from './item';
import {itemUpdate} from '../../actions/index';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderIndex: 0
        };
    }

    toOrder(orderIndex) {
        this.setState({
            orderIndex
        })
    }

    componentDidMount() {
        this.props.dispatch(itemUpdate());
    }

    render() {
        var items = this.props.items.filter( item => {
            if (item.pid == 0) {
                item.children = this.props.items.filter( child => child.pid == item.id);
            }
            return item.pid == 0;
        });

        return (
            <div className="sku-box store-content">
                <div className="sort-option">
                    <ul className="line clear">
                        {
                            this.props.order.map( item => {
                                return (
                                    <li key={item.orderIndex}>
                                        <a href="javascript:;"
                                           className={this.state.orderIndex == item.orderIndex ? "active" : ""}
                                           onClick={this.toOrder.bind(this, item.orderIndex)}
                                        >{item.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="gray-box">
                    <div className="item-box">
                        {
                            items.map( item => {
                                return (
                                    <Item key={item.id} data={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Main.defaultProps = {
    order: [
        {
            orderIndex: 0,
            name: "综合排序"
        },
        {
            orderIndex: 1,
            name: "销量排序"
        },
        {
            orderIndex: 2,
            name: "价格低到高"
        },
        {
            orderIndex: 3,
            name: "价格高到低"
        }
    ]
}

export default connect( state => {
  return {
      items: state.items
  };
})(Main);