import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {loadPost} from "../actions/index";

class PostsShow extends Component {

    componentWillMount() {
        this.props.loadPost(this.props.params.id);
    }

    render() {
        const post = this.props.post;
        if (!post) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
                <Link className="btn btn-primary" to="/">Back to list</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, {loadPost})(PostsShow);