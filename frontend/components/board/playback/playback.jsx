import React from 'react';
import {findDOMNode} from 'react-dom';
import merge from 'lodash/merge';

class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.intervals = [];
    this.timeouts = [];
  }

  componentWillMount() {
    this.props.requestBoard(this.props.boardId);
  }


  componentDidMount() {
    // this.setupBoard.bind(this)(this.props.board)
    let canvas = findDOMNode(this.canvasRef);
    canvas.width = this.props.dims.width;
    canvas.height = this.props.dims.height;
    let context = canvas.getContext('2d');
    this.setState({
      canvas: canvas,
      context: context,
    });
  }


  setupBoard(board) {
    let newBoard = merge({}, board);
    newBoard.paths = newBoard.paths.map( (path) => (
      this.scalePath.bind(this)(path)
    ));
    this.setState({
      board: newBoard
    });
  }

  clearBoard() {
    this.intervals.forEach( (interval) => {
      clearInterval(interval);
    });
    this.timeouts.forEach( (timeout) => {
      clearTimeout(timeout);
    });
    this.state.context.clearRect(0,0,
      this.state.canvas.width,
      this.state.canvas.height);
  }



  scalePath(path) {
    const newPathCoords = path.pathCoords.map( (coord) => (
      this.scalePathCoord.bind(this)(coord)
      )
    );
    path.pathCoords = newPathCoords;
    return path;
  }

  scalePathCoord(pathCoord) {
    let width = this.props.dims.width;
    let height = this.props.dims.height;
    let newPathCoord = pathCoord;
    newPathCoord.x = (pathCoord.x)*width;
    newPathCoord.y = (pathCoord.y)*height;
    return newPathCoord;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.board
      && this.props.board.stage === 'start'
      && nextProps.board.stage === 'running'
    ) {
      if (this.props.board.paths) {

        this.setTimers.bind(this)();
      }
    }
    if (this.props.boardId !== nextProps.boardId) {
      this.clearBoard.bind(this)();
      this.props.requestBoard(nextProps.boardId);
    }
    if (this.props.board
      && !this.props.board.paths
      && nextProps.board.paths) {
      this.setupBoard.bind(this)(nextProps.board);
    }
    if (nextProps.board && nextProps.board.paths
      && this.state.board
      && (nextProps.boardId !== this.state.board.id)) {

      this.setupBoard.bind(this)(nextProps.board);
    }

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
          if (this.numActiveTimers === 0) {
            this.props.updateBoardStage('finished', this.props.boardId);
          }
        }
      }, 16
    );
    this.intervals.push(drawPathInterval);
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


  setTimers() {
    this.numActiveTimers = this.state.board.paths.length;
    this.state.board.paths.forEach(
      (path) => {
        let newTimeout = setTimeout(
          () => {
            this.drawPath.bind(this)(path);
            this.numActiveTimers -=1;
          },
          path.startTime
        );
        this.timeouts.push(newTimeout);
      }
    );
  }



  render() {
    return (
      <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        id={this.props.canvasId}>
      </canvas>
    );
  }
}

Playback.defaultProps = {
  board: {
    stage: 'start'
  }
};

export default Playback;
