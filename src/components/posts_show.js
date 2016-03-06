import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {loadPost} from "../actions/index";
import {deletePost} from "../actions/index";

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onDelete() {
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/');
        });
    }

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
                    <Link to="/">Back to Index</Link>
                    <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>Delete</button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, {loadPost, deletePost})(PostsShow);