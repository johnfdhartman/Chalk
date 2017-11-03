import React from 'react';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.renderDisplayBio = this.renderDisplayBio.bind(this);
    this.renderEditBio = this.renderEditBio.bind(this);
    this.renderEditButton = this.renderEditButton.bind(this);
    this.handleEditBioChange = this.handleEditBioChange.bind(this);
    this.handleSaveBioClick = this.handleSaveBioClick.bind(this);
    this.state = {};
  }

  componentWillMount(){
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps){

    if (this.props.userId !== nextProps.userId) {
      this.props.requestUser(nextProps.userId);
    }

    //display bio when it's received or changed
    if (nextProps.user && nextProps.user.bio &&
      (!this.props.user || this.props.user.bio !== nextProps.user.bio)
      ) {
      this.setState({
        bio: nextProps.user.bio
      });
    }
  }

  renderBio() {
    if (!this.props.user ||
      !this.props.user.bio ||
      !this.props.ui.bio.editing) {
        return (
          this.renderDisplayBio()
        );
    } else {
      return (
        this.renderEditBio()
      );
    }
  }

  handleEditButtonClick(event) {
    this.props.openBioEditor();
  }

  handleEditBioChange(event) {
    this.setState({
      bio: event.target.value
    });
  }

  handleSaveBioClick(event) {
    this.props.requestUpdateUser({
      bio: this.state.bio
    });
    this.props.closeBioEditor();
  }

  renderEditButton() {
    if (this.props.isCurrentUser) {
      return (
        <button className='edit-bio-button'
          onClick={this.handleEditButtonClick.bind(this)}>
          Edit!
        </button>
      );
    } else {
      return (<div></div>);
    }
  }

  renderEditBio() {
    return (
      <div className='bio-container edit'>
        <textarea
          className='bio bio-edit'
          rows='5'
          cols='50'
          defaultValue={this.state.bio}
          onChange={this.handleEditBioChange}/>
        <button className='save-bio-button'
          onClick={this.handleSaveBioClick}>
          Save Changes
        </button>
      </div>
    );
  }

  renderDisplayBio() {
    let bioText = (this.props.user && this.props.user.bio ?
      this.props.user.bio : 'Loading...');
    let editButton = this.renderEditButton();
    return (
      <div className='bio-container display'>
        <div className='bio'>
          {bioText}
        </div>
        {editButton}
      </div>
    );
  }



  render() {
    let bio = this.renderBio.bind(this)();
    return(
      <div className='user-info'>
        <h2>UserInfo!</h2>
        {bio}
      </div>
    );
  }
}

export default UserInfo;
