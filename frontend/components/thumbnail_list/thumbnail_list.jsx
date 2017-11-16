import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';


class ThumbnailList extends React.Component {

  constructor(props){
    super(props);
    this.renderThumbnail = this.renderThumbnail.bind(this);
  }

  componentWillMount() {
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


  render() {
    let currentPage = this.props.ui.pages[this.props.ui.currentPage];
    let thumbs = currentPage.map(boardId => this.renderThumbnail(boardId));
    return(
      <div className='thumbnail-list'>
        {thumbs}
      </div>
    );
  }

}

export default ThumbnailList;
