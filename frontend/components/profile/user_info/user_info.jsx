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
    this.handleEditBioChange = this.handleEditBioChange.bind(this);
    this.renderDisplayBio = this.renderDisplayBio.bind(this);
    this.renderEditBio = this.renderEditBio.bind(this);
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
        updateParams: {bio: {$set: this.props.user.bio}},
        editing: {$set: true}
      }
    );
    this.setState(newState);
    console.log('this.state', this.state);
  }

  handleEditBioChange(event) {
    let newState = update(
      this.state,
      {
        updateParams: {bio: {$set: event.target.value}}
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



  renderEditBio() {
    let bio = (this.props.user.bio);
    return(
      <textarea
        type='text'
        className='bio-input'
        value={this.state.updateParams.bio}
        onChange={this.handleEditBioChange}
        rows='50'
        cols='50'
        />
    );
  }

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
    return(
      <div className='user-info'>
        {this.displayPictureModal.bind(this)()}
        <h2>User info!</h2>
        {this.state.editing ?
          this.renderEditBio() : this.renderDisplayBio() }
      </div>
    );
  }
}

export default UserInfo;
