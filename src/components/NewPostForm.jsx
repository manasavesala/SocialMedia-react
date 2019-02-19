import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewPostForm(props) {
  let _name = null;
  let _content = null;


  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      name: _name.value,
      content: _content.value,
      likes: 0,
      dislikes: 0,
      id: v4()
    });

    _name.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <h4>Create new post</h4>
        <input type="text"
          id="name"
          placeholder="Name"
          ref={input=>{
            _name = input;
          }}
        />
        <textarea
          id="content"
          placeholder="Content goes here"
          ref={textarea=>{
            _content = textarea;
          }}
        />
        <button type= "submit">Post!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;