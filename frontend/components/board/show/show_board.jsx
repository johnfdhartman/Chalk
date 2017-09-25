import React from 'react';

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
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
