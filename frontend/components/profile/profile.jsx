import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';
import UserInfoContainer from './user_info/user_info_container';
import Modal from 'react-modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    };
  }

  componentWillMount() {
    this.props.requestUserBoards(this.props.userId, 1);
  }

  storeThumbnails(boards) {
    let thumbnails = Object.values(boards);
    let thumbnailComponents = thumbnails.map( (thumbnail) => (
      <div key={thumbnail.id}
        className='thumbnail-wrapper'>
        <ThumbnailContainer boardId={thumbnail.id}/>
        <div className='thumb-info'>
          <div className='thumb-title'>
            {'"'+thumbnail.title+'"'}
          </div>
        </div>
       </div>
    ));
    this.setState({
      thumbnails: thumbnailComponents
    });
  }

  componentWillReceiveProps(nextProps){
    if (this.state.thumbnails.length === 0
      && Object.values(nextProps.boards).length > 0) {
      this.storeThumbnails.bind(this)(Object.values(nextProps.boards));
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    let nowBoards = Object.values(this.props.boards);
    let nextBoards = Object.values(nextProps.boards);
    return (!(nowBoards.length === nextBoards.length
      && this.props.userId === nextProps.userId));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({
        thumbnails: []
      });
      this.props.requestUserBoards(this.props.userId, 1);
    }
  }

  _handlePictureSubmit(event) {
    //do this later
  }

  displayPictureModal() {
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

    let isOpen = true; //for testing purposes. this will change

    return (
      <Modal
        id='display-picture-modal'
        isOpen={isOpen}
        contentLabel='Modal'
        style={modalStyle}>

        <div className='modal-content'>
          Want to change your display picture?
        </div>
        <form onSubmit={this._handlePictureSubmit}>
          <input type='file'/>
          <button type='submit' onClick={this._handleSubmit}>
            Upload Image
          </button>
        </form>
      </Modal>
    );
  }


  render() {
    return(
      <div className='profile'>
        {this.displayPictureModal()}
        <UserInfoContainer userId={this.props.userId}/>
        <div className='thumbnails'>
          {this.state.thumbnails}
        </div>
      </div>
    );
  }
}

export default Profile;
