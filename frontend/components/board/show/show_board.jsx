import React from 'react';
import {findDOMNode} from 'react-dom';
import {merge} from 'lodash/merge';

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestBoard(this.props.boardId).then(action =>
      this.setState({
        board: action.board,
        hiddenPaths: action.board.paths
      })
    );
  }

  componentDidMount() {
    let canvas = findDOMNode(this.canvasRef);
    let width = Math.max(document.documentElement.clientWidth,
      window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight,
      window.innerHeight || 0) * 0.9;
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');
    this.setState({
      canvas: canvas,
      context: context,
    });
  }

  drawPath(path) {
    let pathCoords = path.pathCoords;
    let hiddenPathCoords = pathCoords.slice(2, pathCoords.length-1);
    let currentCoords = pathCoords.slice(0,2);
    this.setState({
      brush: path.brush
    });

    let drawPathInterval = setInterval(
      () => {
        if (hiddenPathCoords.length > 0) {
          this.drawLine.bind(this)(currentCoords[0], currentCoords[1]);
          currentCoords.shift();
          currentCoords.push(hiddenPathCoords.shift());
        } else {
          clearInterval(drawPathInterval);
        }
      }, 16
    );
  }

  drawLine (startPos, endPos, brush) {
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

  handleClick() {
    // let currentPath = this.state.hiddenPaths[0];
    // this.setState({
    //   hiddenPaths: this.state.hiddenPaths.slice(
    //     1, this.state.hiddenPaths.length
    //   )
    // });
    // this.drawPath.bind(this)(currentPath);
    this.setTimers.bind(this)();
  }

  setTimers() {
    console.log('state.board.paths', this.state.board.paths);
    this.state.board.paths.forEach(
      (path) => {
        setTimeout(
          () => {this.drawPath.bind(this)(path);},
          path.startTime
        );
      }
    );
  }

  render() {
    return (
      <div id='show-board-wrapper'
        ref={(wrapper) => { this.wrapperRef = wrapper;}}
        allowFullScreen='true'
        onClick={this.handleClick.bind(this)}
        >
        <canvas
          ref={(canvas) => { this.canvasRef = canvas; }}
          id='board-canvas'>
        </canvas>
      </div>
    );
  }
}

export default ShowBoard;
