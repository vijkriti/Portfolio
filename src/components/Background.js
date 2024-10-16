import "./BackgroundStyles.css";

import React, {Component} from 'react'

class Background extends Component {
    render(){
        return (
            <div className="background">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    };
}

export default Background