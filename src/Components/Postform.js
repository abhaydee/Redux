import React, { Component } from "react";
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import{newPosts} from '../actions/postactions'
 class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChangeField = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const POST = {
      title: this.state.title,
      body: this.state.body,
    };
    newPosts(POST);

    
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Enter the title</label>
          <br />
          <input type="text" name="title" onChange={this.onChangeField} />
          <br />
          <label> Enter the text area</label>
          <br />
          <input type="text" name="body" onChange={this.onChangeField} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes={
  newPosts:Proptypes.func.isRequired,

}

export default connect(null,newPosts)(Postform);