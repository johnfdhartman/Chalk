import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.userId !== nextProps.userId) {
      this.props.requestUser(nextProps.userId);
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
