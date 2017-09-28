import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUserBoards(this.props.userId, 1);
  }

  renderThumbnails() {
    let thumbnails = Object.values(this.props.boards);
    return thumbnails.map( (thumbnail) => (
      <li key={thumbnail.id}>
        <ThumbnailContainer boardId={thumbnail.id}/>
       </li>
    ));
  }

  render() {
    let thumbnails = this.renderThumbnails.bind(this)();
    return(
      <div className='profile'>
        <div className='user-info'>
          User Info!
        </div>
        <div className='thumbnails'>
          {thumbnails}
        </div>
      </div>
    );
  }
}

export default Profile;
