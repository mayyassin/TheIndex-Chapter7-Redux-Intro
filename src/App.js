import React, { Component } from "react";

// Data
// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import * as actionCreators from "./store/action";
import {connect} from "react-redux";

class App extends Component {

  render() {
    let newAuthor = {
      first_name: "Author",
      last_name: `${this.props.id}`,
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={()=> {this.props.addAuthor(newAuthor)}} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authors: state.authors,
    id: state.newAuthorId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAuthor: newAuthor => dispatch(actionCreators.ADD_AUTHOR(newAuthor)),
    deleteAuthor: author=> dispatch(actionCreators.DELETE_AUTHOR(author)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
