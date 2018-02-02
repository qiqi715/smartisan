import React, {Component} from 'react';


class Nav extends Component {


    render() {
        return (
            <ul className="nav-list">
                {
                    this.props.data.map( (item, index) => {
                        return (
                            <li key={index}>
                                <a href="javascript:;">{item}</a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Nav;