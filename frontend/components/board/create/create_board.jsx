import React from 'react';
import {findDOMNode} from 'react-dom';

class CreateBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brush: {
        thickness: '3px',
        color: 'black'
      },
      pointer: {
        x: 0,
        y: 0
      },
      active: false
    };
  }

  componentDidMount(){
    let canvas = findDOMNode(this.canvasRef);
    let context = canvas.getContext('2d');
    this.setState({
      canvas: canvas,
      context: context,
    });
    this.startDrawing.bind(this)();
  }

  startDrawing(){
    setInterval( ()=>console.log(this.state.pointer),
    30);
  }



  handleMouseDown(event) {
    console.log(this.getPointerPos(event));
  }

  handleMouseMove(event) {
    let {top, left} = this.state.canvas.getBoundingClientRect();
    this.setState({
      pointer: {
        x: event.pageX - left,
        y: event.pageY - top
      }
    });
  }

  getPointerPos(event) {
    return {
      x: this.state.pointer.x,
      y: this.state.pointer.y
    };
  }

  render() {

    return(
      <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        id='board-canvas'
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}>
      </canvas>
    );
  }
}

export default CreateBoard;
