import React from 'react';
import Header from './Header';
import Profile from './Profile';
import PostList from './PostList';
import FriendList from './FriendsList';
// import masterPosts from "./masterPosts";



const mainStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto 2fr 1fr'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: 'happy',
      masterPostList: [

        {
          name: 'Gulzat K',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 0,
          likes: 0,
          dislikes: 0
        },
        {
          name: 'James C',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 1,
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Manasa V',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 2,
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Leilani L',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 3,
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Stuart G',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 4,
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Glen S',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          id: 5,
          likes: 0,
          dislikes: 0
        }
      ]
     
    };
    this.handleLikesChange = this.handleLikesChange.bind(this);
    this.statusSubmit = this.statusSubmit.bind(this);
    this.handleDisLikesChange = this.handleDisLikesChange.bind(this);
  }


 
  handleLikesChange(index) {

    this.setState(prevState => ({
      likes: (prevState.masterPostList[index].likes += 1)
    }));
  }

   
  handleDisLikesChange(index) {

    this.setState(prevState => ({
      dislikes: (prevState.masterPostList[index].dislikes += 1)
    }));
  }

  statusSubmit(input) {
    if(input.input ==='happy'){
      this.setState({
        userStatus: input.input + ' 😄'
      });
    } else if (input.input ==='sad'){
      this.setState({
        userStatus: input.input + ' 😢'
      });
    } else if (input.input ==='angry'){
      this.setState({
        userStatus: input.input + ' 😡'
      });
    }else if (input.input ==='bored'){
      this.setState({
        userStatus: input.input + ' 😒'
      });
    }
    else if (input.input ==='sleepy'){
      this.setState({
        userStatus: input.input + ' 😴'
      });
    } else if (input.input ==='surprised'){
      this.setState({
        userStatus: input.input + ' 😱'
      });
    }

                          
    console.log(this.state.userStatus);
  }


  render() {

    return (
      <div>
        <Header /><hr />
        <div className="mainContent" style={mainStyle}>
          <div>
            <Profile userStatus={this.state.userStatus} newStatusSubmit={this.statusSubmit} />       
          </div>

          <PostList postList={this.state.masterPostList}
            changeLikes={this.handleLikesChange}
            changeDisLikes={this.handleDisLikesChange}
          />


          <FriendList />

        </div>
      </div>
    );
  }
}

export default App;