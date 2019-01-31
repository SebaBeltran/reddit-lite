import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Post from "../../components/Post";
import { getNextPosts, getPrevPosts } from "../../redux/actions/actions";
import PropTypes from "prop-types";

class List extends Component {
  constructor() {
    super();

    this.scrollHeight = 0;
    this.scrollTop = 0;
    this.node = undefined;
    this.list = React.createRef();
  }

  componentDidMount() {
    this.node = this.list.current;
    this.refresh = setInterval(this.autoRefresh, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  componentWillUpdate(nextProps) {
    //set scrollHeight and scrollTop only for new posts
    if (this.props.before === nextProps.before) {
      this.scrollHeight = this.node.scrollHeight;
      this.scrollTop = this.node.scrollTop;
    }
  }

  componentDidUpdate(prevProps) {
    //keep scroll position only when new posts are fetched
    if (this.props.before !== prevProps.before) {
      this.node.scrollTop =
        this.scrollTop + (this.node.scrollHeight - this.scrollHeight);
    }
  }
  handleScroll() {
    //fetch posts when user reached the bottom
    if (
      this.node.scrollTop + this.node.offsetHeight ===
      this.node.scrollHeight
    ) {
      console.log("sisi");
      this.getMorePosts();
    }
  }
  autoRefresh = () => {
    const { subreddit, before, getPrevPosts } = this.props;
    getPrevPosts(subreddit, before);
  };

  getMorePosts = () => {
    const { subreddit, after, getNextPosts } = this.props;
    getNextPosts(subreddit, after);
  };

  render() {
    console.log(this.scrollHeight, this.scrollTop);
    const { posts, subreddit } = this.props;
    const showPosts = posts.map((post, i) => {
      return <Post key={i} post={post} />;
    });
    return (
      <div
        onScroll={e => this.handleScroll(e.target)}
        ref={this.list}
        className="list"
      >
        <h1>{subreddit} Posts</h1>
        <div className="container">{showPosts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    subreddit: state.subreddit,
    after: state.after,
    before: state.before
  };
};

const mapDispatchToProps = dispatch => ({
  getNextPosts: (subreddit, after) => dispatch(getNextPosts(subreddit, after)),
  getPrevPosts: (subreddit, before) => dispatch(getPrevPosts(subreddit, before))
});

List.propTypes = {
  posts: PropTypes.array.isRequired,
  subreddit: PropTypes.string.isRequired,
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  getNextPosts: PropTypes.func.isRequired,
  getPrevPosts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
