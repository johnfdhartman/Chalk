import React from 'react';
import {findDOMNode} from 'react-dom';
import merge from 'lodash/merge';
import fscreen from 'fscreen';
import ClockContainer from '../../clock/clock_container';
import Modal from 'react-modal';
class CreateBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brush: {
        lineWidth: '3',
        color: 'black'
      },
      lessonStartTime: false,
      paths: [],
      modalIsOpen: false,
      title: ''
    };

    this.pointer = {
      x: 0,
      y: 0
    };

    this.currentPath = [];
  }

  componentDidMount(){
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
    // this.startDrawing.bind(this)();
  }

  startDrawing() {
    this.drawInterval = setInterval( () => {
      let startPos = this.currentPath[this.currentPath.length -1];
      let endPos = this.pointer;
      this.drawLine.bind(this)(startPos, endPos);
      this.addPosToPath(endPos);
    }, 16);
  }


  drawLine (startPos, endPos) {
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
    if (!this.state.lessonStartTime) {
      this.setState({
        lessonStartTime: Date.now()
      });
      this.props.updateBoardStage('running');
    }
    this.addPosToPath.bind(this)(this.pointer);
    this.setState({pathStartTime: Date.now()});
    this.startDrawing.bind(this)();
    // fscreen.requestFullscreen(this.wrapperRef);
  }

  handleMouseUp(event) {
    clearInterval(this.drawInterval);
    let newPaths = this.state.paths;
    newPaths.push({
      startTime: this.state.pathStartTime - this.state.lessonStartTime,
      endTime: Date.now() - this.state.lessonStartTime,
      pathCoords: this.currentPath,
      brush: this.state.brush
    });
    this.setState({
      paths: newPaths,
      pathStartTime: null
    });
    this.currentPath = [];
    // console.log(this.state.paths);
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
    brushState.color = color;
    if (this.state.brush.color === 'white') {
      brushState.lineWidth= '3';
    }
    return (event) => (
      this.setState({
        brush: brushState
      })
    );
  }

  handleChangeLineWidth(lineWidth) {
    let brushState = merge({}, this.state.brush);
    brushState.lineWidth = lineWidth;
    return (event) => (
      this.setState({
        brush: brushState
      })
    );
  }

  handleEraserClick(event) {
    let brushState = merge({}, this.state.brush);
    brushState.lineWidth = '40';
    brushState.color = 'white';
    this.setState({brush: brushState});
  }

  buttonIsActive(attr, value){
    return (this.state.brush[attr] === value
      ? 'active'
      : 'inactive'
    );
  }

  colorButtonElement(color) {
    let buttonStyle = {
      backgroundColor: color
    };
    let isActive = this.buttonIsActive.bind(this)('color', color);

    return(
      <button
        onClick={this.handleChangeColor.bind(this)(color)}
        className={`color-button ${isActive}`}
        style={buttonStyle}/>
    );
  }

  lineWidthButtonElement(lineWidth) {
    let isActive = this.buttonIsActive.bind(this)('lineWidth', lineWidth);
    return(
      <button
        onClick={this.handleChangeLineWidth.bind(this)(lineWidth)}
        className={`line-width-button ${isActive}`}
        >{lineWidth}</button>
    );
  }

  eraserElement() {
    let isActive = this.buttonIsActive.bind(this)('color', 'white');
    return(
      <button
        onClick={this.handleEraserClick.bind(this)}
        className = {`eraser ${isActive}`}/>
    );
  }


  saveBoard() {
    // this.props.updateCreateBoardStage('post-finished');
    this.props.saveBoard({
      title: this.state.title,
      paths: this.state.paths,
    });
  }

  handleTitleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  renderErrors() {
    let errors = this.props.boardErrors.map(
      (error) => (<li>{error}</li>)
    );
    return (<ul className='errors'>{errors}</ul>);
  }

  saveModal() {
    let myErrors = this.renderErrors.bind(this)();
    let modalStyle = {
      content : {
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '0',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
      }
    };
    return (
      <Modal
        id='create-modal'
        isOpen={(this.props.boardStage === 'finished')}
        contentLabel='Modal'
        style={modalStyle}
        >
        <div className='modal-content'>Give your lesson a title!</div>
        <div>
          <input type='text'
            className='title-input'
            value={this.state.title}
            onChange={this.handleTitleInput.bind(this)}/>
        </div>
        <button
          className='modal-button'
          onClick={this.saveBoard.bind(this)}>
          SAVE
        </button>
        {myErrors}
      </Modal>
    );
  }

  render() {

    return(
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
        <div id='create-board-control'>
          <div id='palette'>
            <div id='color-buttons'>
              {this.colorButtonElement.bind(this)('black')}
              {this.colorButtonElement.bind(this)('red')}
              {this.colorButtonElement.bind(this)('blue')}
            </div>
            <div id='line-width-buttons'>
              {this.lineWidthButtonElement.bind(this)('1')}
              {this.lineWidthButtonElement.bind(this)('3')}
              {this.lineWidthButtonElement.bind(this)('5')}
            </div>
          </div>
          <ClockContainer/>
          {this.eraserElement.bind(this)()}
        </div>
      </div>
    );
  }
}

export default CreateBoard;
