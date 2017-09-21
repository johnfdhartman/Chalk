import React from 'react';

class CreateBoard extends React.Component {
  constructor(props){
    super(props);
    this.path = [];
    this.brush = {color: 'black', thickness: '3px'};
  }

  handleMouseDown(event) {
    
  }

  render() {

    return(
      <canvas id='board-canvas'
        onMouseDown={this.handleMouseDown.bind(this)}>
      </canvas>
    );
  }
}

export default CreateBoard;
