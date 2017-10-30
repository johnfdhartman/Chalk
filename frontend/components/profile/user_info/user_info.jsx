import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      updateProfileParams: {}
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleBioInput = this._handleBioInput.bind(this);
    this._handleNewImage = this._handleNewImage.bind(this);
  }

  componentDidMount(){
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId) {
      this.props.requestUser(nextProps.userId);
    }
  }

  handleEditClick(event) {
    this.setState({
      editing: true,
      bio: this.props.user.bio
    });

  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.requestUpdateUser(this.state.updateProfileParams);
  }

  _handleBioInput(event) {
    event.preventDefault();
    let newState = update(
      this.state,
      {updateProfileParams: {bio: {$set: event.target.value}}}
    );
    this.setState(newState);
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

    let isOpen = true; //for testing purposes. this will change

    return (
      <Modal
        id='display-picture-modal'
        isOpen={isOpen}
        contentLabel='Modal'
        style={modalStyle}>

        <div className='modal-content'>
          Give yourself a newer, better profile!
        </div>
        <form onSubmit={this._handleSubmit} id='update-form'>
          <input type='file'/>
          <button type='submit' onClick={this._handleSubmit}>
            Save Changes
          </button>
        </form>
        <textarea
          name='bio'
          form='update-form'
          onChange={this.handleBioInput}
          value={this.props.user.bio}/>
      </Modal>
    );
  }

  renderEditButton() {
    if (this.props.userId === this.props.session.currentUser
      && !(this.state.editing)) {
      return (
        <button
          className='profile-edit'
          onClick={this.handleEditClick.bind(this)}
          >
          Edit!
        </button>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render(){
    let bio = (this.props.user ? this.props.user.bio : 'Loading...');
    return(
      <div className='user-info'>
        <h2>User info!</h2>
        <div className='bio'>
          {bio}
        </div>
      </div>
    );
  }
}

export default UserInfo;
