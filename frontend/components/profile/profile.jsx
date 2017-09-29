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

  // componentWillUnmount() {

  // }

  render() {
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
