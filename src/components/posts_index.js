import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add A Post
          </Link>
        </div>
        List of Posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// } this can be removed and use that shortcut below. We are mapping the action to this component's props

export default connect(null, {fetchPosts})(PostsIndex); //es6 syntax
