import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index.js';
import {Link} from 'react-router';

class PostsShow extends Component {
  //reference to router
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() =>{
        this.context.router.push('/'); //back to main page
      });
  }

  render() {
    const {post} = this.props;
    //if api not completed yet, maybe use a spinner here
    if(!post) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{post.title}</h3>
        <h6>categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
