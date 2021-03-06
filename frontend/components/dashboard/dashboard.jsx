import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';
import ThumbnailListContainer from '../thumbnail_list/thumbnail_list_container';

//importing (instead of using from props) because this needs to be
//passed to the thumbnail list component
import {requestRecentBoards} from '../../actions/board_actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    };
  }



  render(){
    return(
      <div id='dashboard'>
        <h2> Dashboard </h2>
        <ThumbnailListContainer
          requestBoards={requestRecentBoards}/>
      </div>
    );
  }

  // componentWillMount() {
  //   this.props.requestRecentBoards(1);
  // }

  // storeThumbnails(boards) {
  //   let thumbnails = Object.values(boards);
  //   let thumbnailComponents = thumbnails.map( (thumbnail) => (
  //     <div key={thumbnail.id}
  //       className='thumbnail-wrapper'>
  //       <ThumbnailContainer boardId={thumbnail.id}/>
  //       <div className='thumb-info'>
  //         <div className='thumb-title'>
  //           {'"'+thumbnail.title+'"'}
  //         </div>
  //         <div className='thumb-author'>
  //           by {thumbnail.author.username}
  //         </div>
  //       </div>
  //      </div>
  //   ));
  //   this.setState({
  //     thumbnails: thumbnailComponents
  //   });
  // }

  // componentWillReceiveProps(nextProps){
  //   if (this.state.thumbnails.length === 0
  //     && Object.values(nextProps.boards).length > 0) {
  //     this.storeThumbnails.bind(this)(Object.values(nextProps.boards));
  //   }
  // }


  // render(){
  //   return(
  //     <div id='dashboard'>
  //       <h2> Dashboard </h2>
  //       <div id='dashboard-thumbnails'>
  //         {this.state.thumbnails}
  //       </div>
  //     </div>
  //   );
  // }
}

export default Dashboard;
