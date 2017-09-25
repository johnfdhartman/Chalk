import React from 'react';
import {findDOMNode} from 'react-dom';
import {merge} from 'lodash/merge';
import ClockContainer from '../../clock/clock_container';

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    this.props.requestBoard(this.props.boardId).then(action =>
      this.setState({
        board: action.board
      })
    );
  }

  componentDidMount() {
    this.setState({
      boardStage: this.props.boardStage
    });
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props, 'nextProps', nextProps);
    if (this.props.boardStage === 'start'
      && nextProps.boardStage === 'running'
    ) {
      this.setTimers.bind(this)();
    }
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
          if (this.numActiveTimers === 0) {
            this.props.updateBoardStage('finished');
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
      <div id='show-board-wrapper'
        ref={(wrapper) => { this.wrapperRef = wrapper;}}
        allowFullScreen='true'
        >
        <canvas
          ref={(canvas) => { this.canvasRef = canvas; }}
          id='board-canvas'>
        </canvas>
        <div id='show-board-control'>
          <ClockContainer/>
        </div>
      </div>
    );
  }
}

export default ShowBoard;
