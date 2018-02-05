import React, {Component} from 'react';



class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isShow: false
        };
    }

    componentDidMount() {

    }

    /*菜单点击*/
    menuClick(isShow) {
        this.setState({
            isShow
        });
    }

    /*菜单选择*/
    menuChoose(index) {
        this.props.menuChoose(index);
    }

    render() {
        return (
            <div className={[
                "gray-btn-menu",
                this.props.className,
                this.state.isShow ? "gray-btn-menu-on" : ""
            ].join(" ")}
                 onClick={this.menuClick.bind(this, !this.state.isShow)}
            >
                <span className="label">
                    <i className="arrow"></i>
                    {this.props.list[this.props.index]}
                </span>
                <ul className="menu-list">
                    {
                        this.props.list.map( (item, index) => {
                            return (
                                <li key={index}
                                    className={this.props.index == index ? "selected" : ""}
                                    onClick={this.menuChoose.bind(this, index)}
                                >
                                    <a href="javascript:;">{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

Menu.defaultProps = {
    index: 0,
    list: []
};

export default Menu;