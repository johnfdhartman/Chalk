import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
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
