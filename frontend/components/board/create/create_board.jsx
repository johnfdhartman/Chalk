import React from 'react';
import {findDOMNode} from 'react-dom';

class CreateBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brush: {
        lineWidth: '5',
        color: 'green'
      },
      pointer: {
        x: 0,
        y: 0
      },
      lessonStartTime: Date.now(),
      currentPath: [],
      paths: []
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
      let startPos = this.state.currentPath[this.state.currentPath.length -1];
      let endPos = this.state.pointer;
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
    let newPath = this.state.currentPath;
    newPath.push(pos);
    this.setState({
      currentPath: newPath
    });
  }

  handleMouseDown(event) {
    // let currentPos = this.state.pointer;
    // this.drawPath({x:0, y:0}, currentPos);
    this.addPosToPath.bind(this)(this.state.pointer);
    this.setState({pathStartTime: Date.now()});
    this.startDrawing.bind(this)();
  }

  handleMouseUp(event) {
    clearInterval(this.drawInterval);
    let newPaths = this.state.paths;
    newPaths.push({
      startTime: this.state.pathStartTime - this.state.lessonStartTime,
      endTime: Date.now() - this.state.lessonStartTime,
      path: this.state.currentPath
    });
    this.setState({
      paths: newPaths,
      currentPath: [],
      pathStartTime: null
    });
    console.log(this.state.paths);
  }

  handleMouseMove(event) {
    let {top, left} = this.state.canvas.getBoundingClientRect();
    // let oldPos = this.state.pointer.current;
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

  handleChangeColor(color) {
    let brushState = this.state.brush;
    brushState.color = color;
    // console.log('brushState', brushState);
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
        {this.colorButtonElement.bind(this)('white')}
        {this.colorButtonElement.bind(this)('black')}
        {this.colorButtonElement.bind(this)('green')}
      </div>
    );
  }
}

export default CreateBoard;
