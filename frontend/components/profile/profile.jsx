import React from 'react';
import ThumbnailContainer from '../board/thumbnail/board_thumbnail_container';

// const Profile = (props) => {
//
//   const componentDidMount = () => {
//     props.requestUserBoards(props.userId, 1);
//   };
//
//   return(
//     <div>
//       Profile!
//     </div>
//   );
// };

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUserBoards(this.props.userId, 1);
  }

  render() {
    return(
      <div>
        Profile!
      </div>
    )
  }
}

export default Profile;
