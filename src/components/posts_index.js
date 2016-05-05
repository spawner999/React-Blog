import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>List of Posts</div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// } this can be removed and use that shortcut below. We are mapping the action to this component's props

export default connect(null, {fetchPosts})(PostsIndex); //es6 syntax
