import React from 'react';
import {findDOMNode} from 'react-dom';

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestBoard(this.props.boardId).then(board =>
      this.setState({
        board
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
  

  render() {
    return (
      <div id='show-board-wrapper'
        ref={(wrapper) => { this.wrapperRef = wrapper;}}
        allowFullScreen='true'>
        <canvas
          ref={(canvas) => { this.canvasRef = canvas; }}
          id='board-canvas'>
        </canvas>
      </div>
    );
  }
}

export default ShowBoard;
