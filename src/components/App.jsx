import React from 'react';
import Header from './Header';
import Profile from './Profile';
import PostList from './PostList';
import FriendList from './FriendsList';
import NewPostForm from './NewPostForm';
import { pseudoRandomBytes } from 'crypto';
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
          id: '0',
          likes: 0,
          dislikes: 0
        }
      ]
     
    };
    this.handleLikesChange = this.handleLikesChange.bind(this);
    this.statusSubmit = this.statusSubmit.bind(this);
    this.handleDisLikesChange = this.handleDisLikesChange.bind(this);
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }


 
  // handleLikesChange(index) {

  //   this.setState(prevState => ({
  //     likes: (prevState.masterPostList[index].likes += 1)
  //   }));
  // }

  handleLikesChange(id) {
    for(let post of this.state.masterPostList){
      if(post.id === id) {
        post.likes++;
        let newState = Object.assign({}, this.state.masterPostList, post);
        this.setState({newState});
      }
    }
  }

  handleDisLikesChange(id){
    for(let post of this.state.masterPostList){
      if(post.id===id){
        post.dislikes++;
        let newState = Object.assign({}, this.state.masterPostList,post);
        this.setState({newState});
      }
    }
  }
   
  // handleDisLikesChange(index) {

  //   this.setState(prevState => ({
  //     dislikes: (prevState.masterPostList[index].dislikes += 1)
  //   }));
  // }

  handleAddingNewPostToList(newPost){
    var newMasterPostList= this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
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

          <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/> 
          <FriendList />

        </div>
      </div>
    );
  }
}

export default App;