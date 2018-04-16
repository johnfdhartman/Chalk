import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';


class ThumbnailList extends React.Component {

  constructor(props){
    super(props);
    this.renderThumbnail = this.renderThumbnail.bind(this);
  }

  componentWillMount() {
    this.props.updateCurrentPage(1);
    this.props.requestBoards(1);
  }

  renderThumbnail(boardId){
    return(
      <div key={boardId}
        className='thumbnail-wrapper'>
        <ThumbnailContainer boardId={boardId}/>
        <div className='thumb-info'>
          <div className='thumb-title'>
            {'"'+this.props.boards[boardId].title+'"'}
          </div>
          <div className='thumb-author'>
            by {this.props.boards[boardId].author.username}
          </div>
        </div>
       </div>
    );
  }

  renderLoading() {
    return (
      <h2>
        Page Loading...
      </h2>
    );
  }

  render() {
    if (this.props.pages && this.props.currentPage) {
      let currentPage = this.props.pages[this.props.currentPage];
      let thumbs = currentPage.map(boardId => this.renderThumbnail(boardId));
      return(
        <div className='thumbnail-list'>
          {thumbs}
        </div>
      );
    } else {
      return this.renderLoading();
    }
  }

}

export default ThumbnailList;
