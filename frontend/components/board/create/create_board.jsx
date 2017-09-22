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
        prev: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        }
      },
      active: false
    };
  }

  componentDidMount(){
    let canvas = findDOMNode(this.canvasRef);
    canvas.width = '300';
    canvas.height = '150';
    let context = canvas.getContext('2d');
    this.setState({
      canvas: canvas,
      context: context,
    });
    this.startDrawing.bind(this)();
  }

  startDrawing() {
    setInterval( () => {
      this.drawPath.bind(this)(
        this.state.pointer.prev,
        this.state.pointer.current
      );
    }, 30);
  }


  drawPath (startPos, endPos) {
    let context = this.state.context;
    context.strokeStyle = 'black';
    context.lineWidth = '2px';
    context.beginPath();
    context.moveTo(startPos.x, startPos.y);
    context.lineTo(endPos.x, endPos.y);
    context.closePath();
    context.stroke();
  }

  handleMouseDown(event) {
    let currentPos = this.state.pointer;
    this.drawPath({x:0, y:0}, currentPos);
  }

  handleMouseMove(event) {
    let {top, left} = this.state.canvas.getBoundingClientRect();
    let oldPos = this.state.pointer.current;
    this.setState({
      pointer: {
        prev: oldPos,
        current:{
          x: event.pageX - left,
          y: event.pageY - top
        }
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
