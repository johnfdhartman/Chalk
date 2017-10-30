import React from 'react';
import Modal from 'react-modal';
import update from 'immutability-helper';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      updateParams: {},
      DPModalIsOpen: false
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleNewImage = this._handleNewImage.bind(this);
    this.handleEditBioClick = this.handleEditBioClick.bind(this);
  }

  componentWillMount(){
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId) {
      this.props.requestUser(nextProps.userId);
    }
  }

  handleEditBioClick(event) {
    let newState = update(
      this.state,
      {
        updateParams: {bio: this.props.user.bio},
        editing: true
      }
    );
    this.setState(newState);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.requestUpdateUser(this.state.updateProfileParams);
  }

  _handleNewImage(event) {
    event.preventDefault();
    let reader = new FileReader;
    let displayPictureFile = event.target.files[0];

    reader.onloadend = () => {
      let newState = update(
        this.state,
        {updateProfileParams: {display_picture: {$set: displayPictureFile}}}
      );
      this.setState(newState);
    };

    reader.readAsDataURL(displayPictureFile);
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

    return (
      <Modal
        id='display-picture-modal'
        isOpen={this.state.DPModalIsOpen}
        contentLabel='Modal'
        style={modalStyle}>

        <div className='modal-content'>
          Give yourself a newer, better picture!
        </div>
        <form onSubmit={this._handleSubmit} id='update-form'>
          <input type='file'/>
          <button type='submit' onClick={this._handleSubmit}>
            Save Changes
          </button>
        </form>
      </Modal>
    );
  }

  // renderEditBioButton() {
  //   if (this.props.userId === this.props.session.currentUser
  //     && !(this.state.editing)) {
  //     return (
  //       <button
  //         className='edit-bio'
  //         onClick={this.handleEditClick.bind(this)}
  //         >
  //         Edit!
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <div></div>
  //     );
  //   }
  // }

  renderDisplayBio() {
    let bio = (this.props.user ? this.props.user.bio : 'Loading...');
    let editButton = (
      <button
        className='edit-bio'
        onClick={this.handleEditBioClick}>
        Edit!
      </button>
    );
    return(
      <div className='bio-box display'>
        <div className='bio display'>
          {bio}
        </div>
        {editButton}
      </div>
    );
  }

  render(){
    let bio = (this.props.user ? this.props.user.bio : 'Loading...');
    return(
      <div className='user-info'>
        {this.displayPictureModal.bind(this)()}
        <h2>User info!</h2>
        <div className='bio'>
          {bio}
        </div>
      </div>
    );
  }
}

export default UserInfo;
