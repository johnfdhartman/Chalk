import React from 'react';

class Bio extends React.Component {
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
    if (this.props.user && this.props.user.bio) {
      this.setState({
        bio: this.props.user.bio
      });
    }
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
    if (
      this.props.user && this.props.user.bio !== undefined
        && this.props.ui
        && this.props.ui.profile
        && this.props.ui.profile.bio
        && this.props.ui.profile.bio.editing
    ) {
        return (
          this.renderEditBio()
        );
    } else {
      return (
        this.renderDisplayBio()
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

  renderBioText() {
    // If the field is null, the user doesn't have a bio
    // If it is undefined, it hasn't loaded yet.
    let emptyBioMessage = (this.props.isCurrentUser
      ?  "Looks like you haven't written a profile yet. Would you like to?"
      :  "Looks like this user hasn't written one of these yet!" );
    if (this.props.user && this.props.user.bio){
      return this.props.user.bio;
    } else if (this.props.user && this.props.user.bio !== undefined) {
      return emptyBioMessage;
    } else {
      console.log('this.props.user', this.props.user);
      return 'Loading...';
    }
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
          className='bio-text bio-edit'
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
    let bioText = this.renderBioText.bind(this)();
    let editButton = this.renderEditButton();
    return (
      <div className='bio-text-container display'>
        <div className='bio-text'>
          {bioText}
        </div>
        {editButton}
      </div>
    );
  }



  render() {
    let bio = this.renderBio.bind(this)();
    return(
      <div className='bio'>
        <h2>Bio!</h2>
        {bio}
      </div>
    );
  }
}

export default Bio;
