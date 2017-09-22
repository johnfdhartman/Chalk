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
      mostRecentLine: {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      },
      active: false
    };
  }

  componentDidMount(){
    let canvas = findDOMNode(this.canvasRef);
    canvas.width = '600';
    canvas.height = '300';
    let context = canvas.getContext('2d');
    this.setState({
      canvas: canvas,
      context: context,
    });
    // this.startDrawing.bind(this)();
  }

  startDrawing() {
    this.drawInterval = setInterval( () => {
      let startPos = this.state.mostRecentLine.end;
      let endPos = this.state.pointer.current;
      this.drawPath.bind(this)(startPos, endPos);
      this.setState({
        mostRecentLine: {
          start: startPos,
          end: endPos
        }
      });
    }, 16);
  }


  drawPath (startPos, endPos) {
    let context = this.state.context;
    context.strokeStyle = this.state.brush.color;
    context.lineWidth = this.state.brush.width;
    context.beginPath();
    context.moveTo(startPos.x, startPos.y);
    context.lineTo(endPos.x, endPos.y);
    context.closePath();
    context.stroke();
  }

  handleMouseDown(event) {
    // let currentPos = this.state.pointer;
    // this.drawPath({x:0, y:0}, currentPos);
    this.setState({
      mostRecentLine: {
        start: null,
        end: this.state.pointer.current
      }
    });
    this.startDrawing.bind(this)();
  }

  handleMouseUp(event) {
    clearInterval(this.drawInterval);
  }

  handleMouseMove(event) {
    let {top, left} = this.state.canvas.getBoundingClientRect();
    // let oldPos = this.state.pointer.current;
    console.log('yeeee');
    this.setState({
      pointer: {
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
        onMouseUp={this.handleMouseUp.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}>
      </canvas>
    );
  }
}

export default CreateBoard;
