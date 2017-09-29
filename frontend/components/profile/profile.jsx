import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    };
  }

  componentWillMount() {
    this.props.requestUserBoards(this.props.userId, 1);
  }

  storeThumbnails(boards) {
    let thumbnails = Object.values(boards);
    let thumbnailComponents = thumbnails.map( (thumbnail) => (
      <div key={thumbnail.id}>
        <ThumbnailContainer boardId={thumbnail.id}/>
       </div>
    ));
    this.setState({
      thumbnails: thumbnailComponents
    });
    console.log('yeee');
  }

  componentWillReceiveProps(nextProps){
    if (this.state.thumbnails.length === 0
      && Object.values(nextProps.boards).length > 0) {
      this.storeThumbnails.bind(this)(Object.values(nextProps.boards));
    }
  }

  componentWillUnmount() {

  }

  render() {
    console.log('this.state.thumbnails', this.state.thumbnails);
    return(
      <div className='profile'>
        <div className='user-info'>
          User Info!
        </div>
        <div className='thumbnails'>
          {this.state.thumbnails}
        </div>
      </div>
    );
  }
}

export default Profile;
