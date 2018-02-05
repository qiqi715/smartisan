import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {


    render() {
        return (
            <ul className="nav-list">
                {
                    this.props.data.map( (item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Nav;