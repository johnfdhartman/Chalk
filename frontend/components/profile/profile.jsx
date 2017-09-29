import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    };
  }

  componentWillMount() {
    this.props.requestUserBoards(this.props.userId, 1);
    this.props.requestUser(this.props.userId);
  }

  storeThumbnails(boards) {
    let thumbnails = Object.values(boards);
    let thumbnailComponents = thumbnails.map( (thumbnail) => (
      <div key={thumbnail.id}
        className='thumbnail-wrapper'>
        <ThumbnailContainer boardId={thumbnail.id}/>
        <div className = 'thumb-info'>
          {thumbnail.title}
          <br/>
          Created at {thumbnail.created_at}
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
    let nowBoards = Object.values(merge({},this.props.boards));
    let nextBoards = Object.values(merge({},nextProps.boards));
    let shouldUpdate = (!(
      this.props.userId === nextProps.userId
      && this.boardsAreEqual.bind(this)(nowBoards, nextBoards))
    );
    console.log('nowBoards', nowBoards);
    console.log('nextBoards', nextBoards);
    console.log('shouldUpdate', shouldUpdate);
    return shouldUpdate;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevProps', prevProps);
    // console.log('this.props', this.props);
    // console.log('boardsAreEqual', (this.boardsAreEqual.bind(this)(prevProps.boards, this.props.boards)));
    this.setState({
      thumbnails: []
    });
    this.props.requestUserBoards(this.props.userId, 1);
    this.props.requestUser(this.props.userId);
    console.log('this.state', this.state);
  }

  boardsAreEqual(oldBoards, newBoards) {
    //compares two arrays of boards
    //returns true iff they are equal (comparing with board Id), not
    //including order
    let oldIds = oldBoards.map( (board) => (board.id)).sort();
    let newIds = newBoards.map( (board) => (board.id)).sort();
    console.log(`${oldBoards} === ${newBoards}?`,
      (JSON.stringify(oldBoards) == JSON.stringify(newBoards)));
    return (JSON.stringify(oldIds) == JSON.stringify(newIds));
  }

  renderUserInfo() {
    let bio = (this.props.user ? this.props.user.bio : 'Loading...');
    return(
      <div className='user-info'>
        <h2>User Info</h2>
        <div className='bio'>
          {bio}
        </div>
      </div>
    );
  }

  render() {
    console.log('rerendering');
    let userInfo = this.renderUserInfo.bind(this)();
    return(
      <div className='profile'>
        {userInfo}
        <div className='thumbnails'>
          {this.state.thumbnails}
        </div>
      </div>
    );
  }
}

export default Profile;
