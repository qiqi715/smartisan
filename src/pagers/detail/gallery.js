import React, {Component} from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            index: 0
        });
    }

    /*鼠标移动*/
    mouseOver(index) {
        this.setState({
            index
        });
    }


    render() {
        if (!this.props.current) {
            return "";
        }

        return (
            <div className="gallery-wrapper">
                <div className="gallery">
                    <div className="thumbnail">
                        <ul>
                            {
                                this.props.current.album.map( (item, index) => {
                                    return (
                                        <li key={index}
                                            className={index == this.state.index ? "on" : ""}
                                            onMouseOver={this.mouseOver.bind(this, index)}
                                        >
                                            <img src={item}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="thumb">
                        <ul>
                            {
                                this.props.current.album.map( (item, index) => {
                                    return (
                                        <li key={index}
                                            className={index == this.state.index ? "on" : ""}>
                                            <img src={item}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
