import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';
import UserInfoContainer from './user_info/user_info_container';
import Modal from 'react-modal';
import update from 'immutability-helper';

//Extra thanks to Brian Emil Hartz (http://www.hartzis.me/react-image-upload/)
//for writin a tutorial to help with this

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
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

  renderDisplayPicture() {
    if (this.props.user && this.props.user.displayPictureUrl) {
      return (
        <img
          src={this.props.user.displayPictureUrl}
          className='display-picture'/>
      );
    } else {
      return (<div/>);
    }
  }


  render() {
    return(
      <div className='profile'>
        <div className='bio-picture-container'>
          {this.renderDisplayPicture.bind(this)()}
          <UserInfoContainer
            userId={this.props.userId}
            isCurrentUser={this.props.isCurrentUser}/>
        </div>
        <div className='thumbnails'>
          {this.state.thumbnails}
        </div>
      </div>
    );
  }
}

export default Profile;
