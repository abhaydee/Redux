import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { fetchPosts } from "../actions/postactions";
class Posts extends Component {
  componentDidMount() {
    fetchPosts();
  }
  componentDidUpdate(prevProps){
    if(prevProps.newPost){
      this.props.post.unshift(prevProps.newPost)
    }
  }
  render() {
    return (
      <div style={{ width: "90%", margin: "auto" }}>
        {this.props.posts.map((post) => (
          <>
            <h1>{post.id}</h1>
            <p>{post.body}</p>
          </>
        ))}
      </div>
    );
  }
}
Posts.propTypes={
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired
}
const mapStateToProps=state=>({
  posts:state.posts.items,
  newPost:state.posts.item
})

export default connect(mapStateToProps, fetchPosts)(Posts);
