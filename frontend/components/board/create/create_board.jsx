import React from 'react';
import {findDOMNode} from 'react-dom';
import merge from 'lodash/merge';

class CreateBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brush: {
        lineWidth: '5',
        color: 'green'
      },
      lessonStartTime: Date.now(),
      paths: []
    };

    this.pointer = {
      x: 0,
      y: 0
    };

    this.currentPath = [];
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
      let startPos = this.currentPath[this.currentPath.length -1];
      let endPos = this.pointer;
      this.drawPath.bind(this)(startPos, endPos);
      this.addPosToPath(endPos);
    }, 16);
  }


  drawPath (startPos, endPos) {
    let context = this.state.context;
    context.strokeStyle = this.state.brush.color;
    context.lineWidth = this.state.brush.lineWidth;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(startPos.x, startPos.y);
    context.lineTo(endPos.x, endPos.y);
    context.closePath();
    context.stroke();
  }

  addPosToPath(pos) {
    this.currentPath.push(pos);
  }

  handleMouseDown(event) {
    // let currentPos = this.state.pointer;
    // this.drawPath({x:0, y:0}, currentPos);
    this.addPosToPath.bind(this)(this.pointer);
    this.setState({pathStartTime: Date.now()});
    this.startDrawing.bind(this)();
  }

  handleMouseUp(event) {
    clearInterval(this.drawInterval);
    let newPaths = this.state.paths;
    newPaths.push({
      startTime: this.state.pathStartTime - this.state.lessonStartTime,
      endTime: Date.now() - this.state.lessonStartTime,
      path: this.currentPath
    });
    this.setState({
      paths: newPaths,
      pathStartTime: null
    });
    this.currentPath = [];
    console.log(this.state.paths);
  }

  handleMouseMove(event) {
    let {top, left} = this.state.canvas.getBoundingClientRect();
    // let oldPos = this.state.pointer.current;
    this.pointer = {
      x: event.pageX - left,
      y: event.pageY - top
    };
  }

  getPointerPos(event) {
    return {
      x: this.pointer.x,
      y: this.pointer.y
    };
  }

  handleChangeColor(color) {
    let brushState = merge({},this.state.brush);
    console.log('this.state.brush1', this.state.brush);
    brushState.color = color;
    console.log('this.state.brush2', this.state.brush);
    // console.log('this.state.brush', this.state.brush);
    return (event) => (
      this.setState({
        brush: brushState
      })
    );
  }

  colorButtonElement(color) {
    let buttonStyle = {
      backgroundColor: color
    };
    return(
      <button
        onClick={this.handleChangeColor.bind(this)(color)}
        style={buttonStyle}/>
    );
  }

  render() {

    return(
      <div>
        <canvas
          ref={(canvas) => { this.canvasRef = canvas; }}
          id='board-canvas'
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}>
        </canvas>
        <div>
          {this.colorButtonElement.bind(this)('black')}
        </div>
        <div>
          {this.colorButtonElement.bind(this)('green')}
        </div>
      </div>
    );
  }
}

export default CreateBoard;
