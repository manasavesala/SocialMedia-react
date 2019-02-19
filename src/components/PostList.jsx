import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
//   console.log(props.postList);
  // let postBody = {
  //     display: 'grid',
  //     gridTemplateColumns: '1fr 1fr 1f'

  // }

  return (
    <div>
      <hr />
      {props.postList.map((post) =>
        <Post name={post.name}
          content={post.content}
          id={post.id}
          likes={post.likes}
          dislikes={post.dislikes}
          changeLikes={props.changeLikes}
          changeDisLikes={props.changeDisLikes}
          key={post.id} />
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  changeLikes: PropTypes.func,
  changeDisLikes: PropTypes.func

};


export default PostList;