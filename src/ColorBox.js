import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = this.props.opacity;
    if(newValue >= 0.2) {
    return (

      <div className="color-box" style={{opacity: this.props.opacity/*replace null with the value*/}}>
        <ColorBox opacity={this.props.opacity - 0.1} /> 
      </div>
    )
  } else {
    return null 
  }
}}
