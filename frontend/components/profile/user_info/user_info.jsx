import React from 'react';

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.renderDisplayBio = this.renderDisplayBio.bind(this);
    this.renderEditBio = this.renderEditBio.bind(this);
  }

  componentWillMount(){
    this.props.requestUser(this.props.userId);
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

  renderEditBio() {
    return (<div>a</div>);
  }

  renderDisplayBio() {
    let bioText = (this.props.user && this.props.user.bio ?
      this.props.user.bio : 'Loading...');

    return (
      <div className='bio-container display'>
        <div className='bio'>
          {bioText}
        </div>
        <button className='edit-bio-button'
          onClick={this.handleEditButtonClick.bind(this)}>
          Edit!
        </button>
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
