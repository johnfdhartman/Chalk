import React from 'react';

class ViewBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='create-board-wrapper'
        ref={(wrapper) => { this.wrapperRef = wrapper;}}
        allowFullScreen='true'>
        {this.saveModal()}
        <canvas
          ref={(canvas) => { this.canvasRef = canvas; }}
          id='board-canvas'
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}>
        </canvas>
      </div>
    );
  }
}
