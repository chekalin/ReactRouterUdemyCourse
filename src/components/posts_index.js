import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions/index";
import {Link} from "react-router";

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                        Create post
                    </Link>
                </div>

                <div>List of posts...</div>
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);