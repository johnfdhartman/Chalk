import React from 'react';
import {findDOMNode} from 'react-dom';
import {merge} from 'lodash/merge';

class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    if (!this.props.board || !this.props.board.paths) {
      this.loadBoardData.bind(this)();
    } else {
      let newBoard = this.props.board;
      const newPaths = this.props.board.paths.map( (path) => (
        this.scalePath.bind(this)(path)
      ));
      newBoard.paths = newPaths;
      this.setState({
        board: newBoard
      });
    }
  }

  componentWillUnmount() {
    
  }

  loadBoardData() {
    this.props.requestBoard(this.props.boardId).then(action => {
      const newPaths = action.board.paths.map( (path) => (
        this.scalePath.bind(this)(path)
      ));
      let newBoard = action.board;
      newBoard.paths = newPaths;
      this.setState({
        board: newBoard
      });
    });
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

  // componentDidMount() {
  //   this.setState({
  //     stage: this.props.board.stage
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.board.stage === 'start'
      && nextProps.board.stage === 'running'
    ) {
      console.log('running playback');
      this.setTimers.bind(this)();
    }
  }

  componentDidMount() {
    let canvas = findDOMNode(this.canvasRef);
    canvas.width = this.props.dims.width;
    canvas.height = this.props.dims.height;
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
          if (this.numActiveTimers === 0) {
            this.props.updateBoardStage('finished', this.props.boardId);
          }
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


  setTimers() {
    console.log('timers set');
    this.numActiveTimers = this.state.board.paths.length;
    this.state.board.paths.forEach(
      (path) => {
        setTimeout(
          () => {
            this.drawPath.bind(this)(path);
            this.numActiveTimers -=1;
          },
          path.startTime
        );
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

export default Playback;
